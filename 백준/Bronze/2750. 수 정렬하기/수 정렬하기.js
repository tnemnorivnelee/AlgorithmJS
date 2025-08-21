const fs = require("fs");

const input = fs
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

input.shift();

const sortedByAsc = input.sort((a, b) => a - b);

console.log(sortedByAsc.join("\n"));
