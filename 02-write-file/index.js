const fs = require("fs");
const path = require("path");
let stream;

stream = fs.createWriteStream(path.join(__dirname, "text.txt"), "utf8");

const buy = () => {
  process.stdout.write("Sad that you are leaving :(");
  process.exit();
};

process.stdout.write(
  'Please, enter something or "exit" to complete the input\n'
);

process.stdin.on("data", (data) => {
  if (data.toString().replace(/\s/g, "") === "exit") {
    buy();
  }
  data = data.toString();
  stream.write(data + "\n");
});

process.on("SIGINT", () => {
  buy();
});
