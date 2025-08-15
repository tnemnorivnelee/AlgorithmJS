const fs = require("fs");

const [a, b, c, d, e, f] = fs
  .readFileSync(0)
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const denominator = a * e - b * d;

const x = (c * e - b * f) / denominator;

const y = (a * f - c * d) / denominator;

console.log(`${x} ${y}`);
