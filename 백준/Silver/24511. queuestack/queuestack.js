const fs = require("fs");

const input = fs.readFileSync("./dev/stdin").toString().trim().split("\n");

const N = Number(input[0]);
const A = input[1].split(" ").map(Number);
const B = input[2].split(" ").map(Number);
const M = Number(input[3]);
const C = input[4].split(" ").map(Number);

let queueStack = [];

for (let i = N - 1; i >= 0; i--) {
  if (A[i] === 0) queueStack.push(B[i]);
}

if (queueStack.length === 0) {
  console.log(C.join(" "));
  return;
}

const combined = [...queueStack, ...C];

const result = combined.slice(0, M);

console.log(result.join(" "));
