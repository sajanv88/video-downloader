const express = require("express");
const next = require("next");
const path = require("path");
const bodyParser = require("body-parser");
const PORT = parseInt(process.env.PORT) || 3000;

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();
const fileOutPath = `${__dirname}/videos`;
app.prepare().then(() => {
  const server = express();
  server.use(bodyParser.json());
  server.use("/", express.static(path.resolve(__dirname, "public")));

  server.post("/api/download", (req, res) => {
    console.log(req.body);
    const { url } = req.body;
    if (!url) return res.status(400).json({ message: "Not valid" });
    const youtubedl = require("youtube-dl");
    const fs = require("fs");
    const video = youtubedl(
      url,
      // Optional arguments passed to youtube-dl.
      ["--format=18"],
      // Additional options can be given for calling `child_process.execFile()`.
      { cwd: __dirname }
    );

    // Will be called when the download starts.
    video.on("info", function(info) {
      console.log("Download started");
      console.log("filename: " + info._filename);
      console.log("size: " + info.size);

      video
        .pipe(fs.createWriteStream(`${fileOutPath}/${info._filename}`))
        .on("finish", () => {
          console.log("Download finished");

          res.status(200).json({
            name: info._filename,
            size: info.size,
            status: "Completed"
          });
        });
    });
    video.on("error", function error(err) {
      console.log("error 2:", err);
      res.status(500).json({
        message: "Sorry, download failed!"
      });
    });
  });

  server.get("/download/:name", (req, res) => {
    const file = `${__dirname}/videos/${req.params.name}`;
    res.download(file);
  });

  server.get("*", (req, res) => {
    return handle(req, res);
  });
  server.listen(PORT, () => {
    console.log(`Server is running...`);
  });
});
