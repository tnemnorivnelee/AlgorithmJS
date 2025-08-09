const fs = require("fs");

const input = fs
  .readFileSync(0)
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const [M, N] = input;

const primes = new Set();

for (let i = M; i <= N; i++) {
  if (i === 1) continue;
    
  let flag = true;

  for (let j = 2; j <= Math.sqrt(i); j++) {
    if (i % j === 0) {
      flag = false;
      break;
    }
  }

  if (flag) primes.add(i);

  flag = true;
}

if (primes.size === 0) {
  console.log(-1);
} else {
  const total = [...primes].reduce((pre, cur) => pre + cur, 0);
  const min = Math.min(...primes);
  console.log(`${total}\n${min}`);
}
