const fs = require("fs");

const input = fs.readFileSync("./dev/stdin").toString().trim().split(/\r?\n/).map(Number);

const N = input.shift();

const gcd = (a, b) => {
  if (b === 0) return a;

  return gcd(b, a % b);
}

const gap = [];

for (let i = 0; i < input.length - 1; i++) {
  gap.push(input[i + 1] - input[i]);
}

const totalGcd = gap.reduce((acc, cur) => gcd(acc, cur));

const totalTrees = (input[N - 1] - input[0]) / totalGcd + 1;

console.log(totalTrees - N);