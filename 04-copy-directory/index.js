const fs = require("fs");
const path = require("path");

fs.mkdir(path.join(__dirname, "files-copy"), () => {});

fs.promises.readdir(path.join(__dirname, "files")).then((files) =>
  files.forEach((file) => {
    fs.promises.copyFile(
      path.join(__dirname, "files", file),
      path.join(__dirname, "files-copy", file)
    );
  })
);
