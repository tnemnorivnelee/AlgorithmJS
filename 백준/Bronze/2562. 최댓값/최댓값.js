const fs = require("fs");

const input = fs
  .readFileSync(0)
  .toString()
  .trim()
  .split("\n")
  .map(Number);

let result = "";

const max = Math.max(...input);

result += max + "\n";

for (const idx in input) {
  if (input[idx] === max) result += Number(idx) + 1;
}

console.log(result);
