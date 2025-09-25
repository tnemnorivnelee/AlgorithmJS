const fs = require("fs");

const input = fs
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const K = input.slice(0, 1);

const integers = input.slice(1);

const result = [];

for (const integer of integers) {
  integer === 0 ? result.pop() : result.push(integer);
}

const total = result.reduce((acc, cur) => acc + cur, 0);

console.log(total);
