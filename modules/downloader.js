const path = require("path");
const fileOutPath = path.resolve(path.join(__dirname, "../videos"));

class Downloader {
  constructor() {
    this.youtube = this.youtube.bind(this);
    this.facebook = this.facebook.bind(this);
  }

  youtube(url, youtubedl, res) {
    const fs = require("fs");
    const video = youtubedl(
      url,
      // Optional arguments passed to youtube-dl.
      ["--format=18"],
      // Additional options can be given for calling `child_process.execFile()`.
      { cwd: path.resolve(path.join(__dirname, "../")) }
    );

    // Will be called when the download starts.
    video.on("info", function(info) {
      console.log("Download started");
      console.log("filename: " + info._filename);
      console.log("size: " + info.size);

      video
        .pipe(fs.createWriteStream(`${fileOutPath}/${info._filename}`))
        .on("finish", () => {
          res.status(200).json({
            name: info._filename,
            size: info.size,
            status: "Completed"
          });
        });
    });

    video.on("error", function(err) {
      res.status(500).json({
        message: "Sorry, download failed!"
      });
    });
  }

  facebook(url, res) {
    const req = require("got");
    const fs = require("fs");
    req(url)
      .then(r => {
        const link = r.body.split('hd_src:"')[1].split('",sd_src:"')[0];
        const fileName = link.split("?")[0].split("/")[5]; //extract file name;
        const httpsReq = require("https");
        const file = fs.createWriteStream(`${fileOutPath}/${fileName}`);
        httpsReq.get(link, response => {
          response.pipe(file);
        });
        file.on("finish", () => {
          file.close();
          const stats = fs.statSync(`${fileOutPath}/${fileName}`);
          res.status(200).json({
            name: fileName,
            size: stats["size"],
            status: "Completed"
          });
        });
      })
      .catch(error => {
        console.log(error);
        if (error) {
          res.status(500).json({
            message: "Sorry, download failed!"
          });
        }
      });
  }
}

module.exports = new Downloader();
