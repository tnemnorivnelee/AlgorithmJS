const fs = require("fs");

const input = fs.readFileSync("./dev/stdin").toString().trim().split("\n").map(Number);

const N = input.slice(0, 1);

const trees = input.slice(1)

const gcd = (a, b) => {
  return b === 0 ? a : gcd(b, a % b);
}

const gaps = trees.slice(1).map((tree, index) => tree - trees[index]);

const totalGcd = gaps.reduce((prev, cur) => gcd(prev, cur));

const totalTrees = (trees[N - 1] - trees[0]) / totalGcd  + 1;

console.log(totalTrees - N);
