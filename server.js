const express = require("express");
const next = require("next");
const path = require("path");
const bodyParser = require("body-parser");
const PORT = parseInt(process.env.PORT) || 3000;
const rateLimit = require("express-rate-limit");

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();
const fileOutPath = `${__dirname}/videos`;
require("./clean").run();
//tempory store feedbacks in csv, later move to email services..
const createCsvWriter = require("csv-writer").createObjectCsvWriter;
const emailCsv = createCsvWriter({
  path: `${__dirname}/messages/feedback.csv`,
  header: [
    { id: "firstName", title: "FIRSTNAME" },
    { id: "lastName", title: "LASTNAME" },
    { id: "email", title: "EMAIL" },
    { id: "message", title: "MESSAGE" }
  ]
});

app.prepare().then(() => {
  const server = express();
  server.set("trust proxy", 1);

  server.use(bodyParser.json());
  server.use("/", express.static(path.resolve(__dirname, "public")));

  const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 50, // limit each IP to 100 requests per windowMs
    message: "Too many accounts created from this IP, please try again later!!"
  });

  server.use("/api", limiter);

  server.post("/api/download", (req, res) => {
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

  server.post("/api/submit", (req, res) => {
    const isValid = Object.values(req.body).every(v => v);
    if (!isValid)
      return res.status(400).json({ message: "All feilds are mandatory!" });

    const records = [req.body];
    emailCsv
      .writeRecords(records) // returns a promise
      .then(() => {
        console.log("...Done");
        return res.status(200).json({ data: "Successfully sent!" });
      });
  });

  server.get("*", (req, res) => {
    return handle(req, res);
  });
  server.listen(PORT, () => {
    console.log(`Server is running...`);
  });
});
