const fs = require("fs");
const path = require("path");

let stream = fs.createWriteStream(
  path.join(__dirname, "project-dist/bundle.css"),
  "utf8"
);

fs.promises.readdir(path.join(__dirname, "styles")).then((files) =>
  files.forEach((file) => {
    const filePath = path.join(path.join(__dirname, "styles"), file);
    if (path.extname(filePath) === ".css") {
      const value = fs.createReadStream(
        path.join(path.join(__dirname, "styles"), path.basename(filePath))
      );
      value.on("data", (data) => {
        data = data.toString();
        stream.write(data + "\n");
      });
    }
  })
);
