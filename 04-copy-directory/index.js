const fs = require("fs");
const path = require("path");

fs.stat(path.join(__dirname, "files-copy"), function (err) {
  if (!err) {
    fs.readdir(path.join(__dirname, "files-copy"), (err, files) => {
      if (err) throw err;

      for (const file of files) {
        fs.unlink(
          path.join(path.join(__dirname, "files-copy"), file),
          (err) => {
            // if (err) throw err;
          }
        );
      }
    });

    fs.mkdir(
      path.join(__dirname, "files-copy"),
      { recursive: true, force: true },
      () => {}
    );
    fs.promises.readdir(path.join(__dirname, "files")).then((files) =>
      files.forEach((file) => {
        fs.promises.copyFile(
          path.join(__dirname, "files", file),
          path.join(__dirname, "files-copy", file)
        );
      })
    );
  } else if (err.code === "ENOENT") {
    fs.mkdir(
      path.join(__dirname, "files-copy"),
      { recursive: true, force: true },
      () => {}
    );

    fs.promises.readdir(path.join(__dirname, "files")).then((files) =>
      files.forEach((file) => {
        fs.promises.copyFile(
          path.join(__dirname, "files", file),
          path.join(__dirname, "files-copy", file)
        );
      })
    );
  }
});

fs.promises.readdir(path.join(__dirname, "files")).then((files) =>
  files.forEach((file) => {
    fs.promises.copyFile(
      path.join(__dirname, "files", file),
      path.join(__dirname, "files-copy", file)
    );
  })
);
