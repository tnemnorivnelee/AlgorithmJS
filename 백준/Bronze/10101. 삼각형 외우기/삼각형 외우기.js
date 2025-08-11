const fs = require("fs");

const input = fs
  .readFileSync(0)
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const [a, b, c] = input;

const total = input.reduce((pre, cur) => pre + cur, 0);

if (a === 60 && b === 60 && c === 60) {
  console.log("Equilateral");
} else if (total === 180) {
  if (a === b || b === c || a === c) {
    console.log("Isosceles");
  } else {
    console.log("Scalene");
  }
} else {
  console.log("Error");
}
