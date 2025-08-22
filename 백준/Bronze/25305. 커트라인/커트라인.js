const fs = require("fs");

const input = fs.readFileSync("./dev/stdin").toString().trim().split("\n");

const [N, k] = input[0].split(" ").map(Number);

const sortedByDesc = input[1]
  .split(" ")
  .map(Number)
  .sort((a, b) => b - a);

console.log(sortedByDesc[k - 1]);
