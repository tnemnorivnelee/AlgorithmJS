const fs = require("fs");

const input = fs.readFileSync("./dev/stdin").toString().trim().split("\n");

const coordinates = input.slice(1).map((line) => line.split(" ").map(Number));

coordinates.sort((a, b) => {
  if (a[0] !== b[0]) {
    return a[0] - b[0];
  } else {
    return a[1] - b[1];
  }
});

console.log(coordinates.map((line) => line.join(" ")).join("\n"));
