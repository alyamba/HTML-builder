// let fs = require("fs");
// const path = require("path");

// fs.stat(path.join(__dirname, "project-dist/assets"), function(err) {
//   if (!err) {
//     fs.readdir(path.join(__dirname, "project-dist/assets"), (err, files) => {
//       if (err) throw err;
    
//       for (const file of files) {
//         fs.unlink(
//           path.join(path.join(__dirname, "project-dist/assets"), file),
//           (error) => {
//             if (error) throw error;
//           }
//         );
//       }
//     });
//   }
//   else if (err.code === 'ENOENT') {
//     fs.mkdir(
//       path.join(__dirname, "project-dist/assets"),
//       { recursive: true, force: true },
//       (err) => {
//         if (err) throw err;
//       }
//     );
//   }
// });
//---------------------------------------------------
// fs.mkdir(
//   path.join(__dirname, "project-dist/assets"),
//   { recursive: true, force: true },
//   (err) => {
//     if (err) throw err;
//   }
// );

// fs.readdir(path.join(__dirname, "project-dist/assets"), (err, files) => {
//   if (err) throw err;

//   for (const file of files) {
//     fs.unlink(
//       path.join(path.join(__dirname, "project-dist/assets"), file),
//       (err) => {
//         if (err) throw err;
//       }
//     );
//   }
// });
//---------------------------------------------------
// fs.promises.readdir(path.join(__dirname, "assets")).then((files) =>
//   files.forEach((file) => {
//     fs.promises.copyFile(
//       path.join(__dirname, "assets", file),
//       path.join(__dirname, "project-dist/assets", file)
//     );
//   })
// );

// let stream1 = fs.createWriteStream(
//   path.join(__dirname, "project-dist/index.html"),
//   "utf8"
// );
// let stream2 = fs.createWriteStream(
//   path.join(__dirname, "project-dist/style.css"),
//   "utf8"
// );
//---------------------------------------------------
// fs.promises.readdir(path.join(__dirname, "styles")).then((files) =>
//   files.forEach((file) => {
//     const filePath = path.join(path.join(__dirname, "styles"), file);
//     if (path.extname(filePath) === ".css") {
//       const value = fs.createReadStream(
//         path.join(path.join(__dirname, "styles"), path.basename(filePath))
//       );
//       value.on("data", (data) => {
//         data = data.toString();
//         stream.write(data + "\n");
//       });
//     }
//   })
// );
