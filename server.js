const express = require("express");
const next = require("next");
const path = require("path");
const bodyParser = require("body-parser");
const PORT = parseInt(process.env.PORT) || 3000;
const rateLimit = require("express-rate-limit");
const youtubedl = require("youtube-dl");

const downloader = require("./modules/downloader");
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

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

const validateEmail = email => {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

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
    if (url.includes("facebook")) {
      downloader.facebook(url, res);
    } else {
      downloader.youtube(url, youtubedl, res);
    }
  });

  server.get("/download/:name", (req, res) => {
    const file = `${__dirname}/videos/${req.params.name}`;
    res.download(file);
  });

  server.post("/api/submit", (req, res) => {
    const isValid = Object.values(req.body).every(v => v);
    if (!isValid)
      return res.status(400).json({ message: "All feilds are mandatory!" });

    if (!validateEmail(req.body.email)) {
      return res.status(400).json({ message: "Email is not valid" });
    }
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
