const fs = require("fs");

const input = fs
  .readFileSync(0)
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const maxSide = Math.max(...input);

const minSidesTotal = input.reduce((pre, cur) => pre + cur, 0) - maxSide;

if (maxSide < minSidesTotal) {
  console.log(maxSide + minSidesTotal);
} else {
  const temp = minSidesTotal - 1;
  console.log(temp + minSidesTotal);
}
