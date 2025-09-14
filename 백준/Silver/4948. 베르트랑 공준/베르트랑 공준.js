const fs = require("fs");

const input = fs.readFileSync("./dev/stdin").toString().trim().split("\n").map(Number);

const MAX_N = 123456;
const MAX_RANGE = MAX_N * 2;

const isPrime = new Array(MAX_RANGE + 1).fill(true);

isPrime[0] = isPrime[1] = false;

for (let i = 2; i**2 <= MAX_RANGE; i++) {
  if (isPrime[i]) {
    for (let j = i**2; j <= MAX_RANGE; j += i) {
      isPrime[j] = false;
    }
  }
}

const result = [];

for (const n of input) {
  if (n === 0) break;

  let count = 0;

  for (let i = n + 1; i <= 2 * n; i++) {
    if (isPrime[i]) count++;
  }
  result.push(count);
}

console.log(result.join("\n"));