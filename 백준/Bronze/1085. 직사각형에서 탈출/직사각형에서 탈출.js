const fs = require("fs");

const input = fs
  .readFileSync(0)
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const [x, y, w, h] = input;

console.log(Math.min(w - x, h - y, x, y));
