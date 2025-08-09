const fs = require("fs");

const [N, K] = fs.readFileSync(0).toString().trim().split(' ').map(Number);

const divisorSet = new Set();

for (let i = 1; i <= Math.sqrt(N); i++) {
  if (N % i === 0) {
    divisorSet.add(i);
    divisorSet.add(N / i);
  }
}

const divisor = Array.from(divisorSet).sort((a, b) => a - b);

if (K > divisor.length) {
  console.log(0);
} else {
  console.log(divisor[K - 1]);
}
