const fs = require("fs");

const input = fs
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("")
  .map(Number);

const sortedByDesc = input.sort((a, b) => b - a);

console.log(sortedByDesc.join(""));
