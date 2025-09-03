const fs = require("fs");

const input = fs.readFileSync("./dev/stdin").toString().trim().split("\n");

input.shift();

const A = input.shift().split(" ").map(Number);
const B = input.shift().split(" ").map(Number);

const setA = new Set(A);
const setB = new Set(B);


for (let i = 0; i < B.length; i++) {
  if (setA.has(B[i])) setA.delete(B[i]);
}

for (let i = 0; i < A.length; i++) {
  if (setB.has(A[i])) setB.delete(A[i]);
}

console.log(setA.size + setB.size);