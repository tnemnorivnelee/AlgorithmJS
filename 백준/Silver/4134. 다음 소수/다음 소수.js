const fs = require("fs");

const input = fs.readFileSync("./dev/stdin").toString().trim().split(/\r?\n/).map(Number);

const testLen = input.slice(0, 1);
const testcases = input.slice(1);

const isPrime = (num) => {
  if (num < 2) return false;

  if (num === 2) return true;

  if (num % 2 === 0) return false;

  for (let i = 3; i * i <= num; i++) {
    if (num % i === 0) return false;
  }

  return true;
}

for (let i = 0; i < testLen; i++) {
  let n = testcases[i];

  while (true) {
    if (isPrime(n)) {
      console.log(n);
      break;
    }
    n++;
  }
}