const file =
  "https://video-amt2-1.xx.fbcdn.net/v/t39.24130-2/10000000_2409550799359710_6720539595257871125_n.mp4?_nc_cat=100&efg=eyJ2ZW5jb2RlX3RhZyI6Im9lcF9oZCJ9&_nc_ohc=QKZzYGkVAFUAQlEFYCgkgr7y84U3jldAtdKH0xg05o-nQ60m4y0X4zbLg&_nc_ht=video-amt2-1.xx&oh=edca12043c99ef47c5616c6e1810cbf3&oe=5EA6D841";
const fs = require("fs");
const req = require("https");

const stats = fs.statSync("file.mp4");
console.log(stats["size"]);

console.log(file.split("?")[0].split("/")[5]);

// const f = fs.createWriteStream(__dirname + "/file.mp4");
// req.get(file, r => {
//   console.log(r, "rrr");
//   r.pipe(f);
// });
// f.on("finish", () => {
//   console.log("completed");
//   f.close();
// });
