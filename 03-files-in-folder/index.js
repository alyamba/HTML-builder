const fs = require("fs/promises");
const path = require("path");

fs.readdir(path.join(__dirname, "secret-folder"), { withFileTypes: true }).then(
  (files) => {
    files.forEach((file) => {
      if (file.isFile()) {
        const filePath = path.join(__dirname, "secret-folder", file.name);
        const fileName = path.basename(filePath).split(".")[0];
        const fileExtname = path.extname(filePath).replace(".", "");
        fs.stat(filePath).then(function (output) {
          console.log(
            fileName + " - " + fileExtname + " - " + output.size + "b"
          );
        });
      }
    });
  },
  (reason) => {
    console.log(reason);
  }
);
