const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const [a1, a0] = input[0].split(" ").map(Number);
const c = Number(input[1]);
const n0 = Number(input[2]);

function isBigO(a1, a0, c, n0) {
  if (a1 > c) {
    return false;
  }

  return a1 * n0 + a0 <= c * n0;
}

const result = isBigO(a1, a0, c, n0);
console.log(result ? 1 : 0);
