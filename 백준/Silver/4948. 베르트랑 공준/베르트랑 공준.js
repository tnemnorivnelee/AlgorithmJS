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

// 누적 합 방법

const primeCountSum = new Array(MAX_RANGE + 1).fill(0);

for (let i = 2; i <= MAX_RANGE; i++) {
  // 이전까지의 누적 합 가져오기
  primeCountSum[i] = primeCountSum[i - 1];

  if(isPrime[i]) primeCountSum[i]++;
}

const result = [];

input.pop();

for (const n of input) {
  const count = primeCountSum[2 * n] - primeCountSum[n];

  result.push(count);
}

console.log(result.join("\n"));