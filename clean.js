const fs = require("fs");
const path = require("path");

const directory = "videos";
const interval = 1000 * 60 * 60;

module.exports = {
  run: () => {
    setInterval(() => {
      fs.readdir(directory, (err, files) => {
        if (err) throw err;
        for (const file of files) {
          fs.unlink(path.join(directory, file), err => {
            if (err) throw err;
            console.log("File deleted!!!", file);
          });
        }
      });
    }, interval);
  }
};
