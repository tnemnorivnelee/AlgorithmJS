const fs = require("fs");

const input = fs.readFileSync("./dev/stdin").toString().trim().split("\n");

const N = +input[0];

const coords = input
  .slice(1, input.length)
  .map((arr) => arr.split(" ").map(Number));

coords.sort((a, b) => {
  if (a[1] !== b[1]) return a[1] - b[1];
  else return a[0] - b[0];
});

console.log(coords.map((arr) => arr.join(" ")).join("\n"));
