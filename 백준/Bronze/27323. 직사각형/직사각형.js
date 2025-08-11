const fs = require("fs");

const input = fs
  .readFileSync(0)
  .toString()
  .trim()
  .split("\n")
  .map(Number);

console.log(input[0] * input[1]);
