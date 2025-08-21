const fs = require("fs");

const input = fs
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const result = [];

const average = input.reduce((pre, cur) => pre + cur, 0) / input.length;

result.push(average);

const sortedByAsc = input.sort((a, b) => a - b);

result.push(sortedByAsc[Math.floor(sortedByAsc.length / 2)]);

console.log(result.join("\n"));
