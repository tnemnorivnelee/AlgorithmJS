const fs = require("fs");

const input = fs
  .readFileSync(0)
  .toString()
  .trim()
  .split("\n")
  .map(Number);

for (const number of input) {
  if (number === -1) break;

  const divisorSet = new Set();

  for (let i = 1; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      divisorSet.add(i);
      divisorSet.add(number / i);
    }
  }

  const divisor = Array.from(divisorSet).sort((a, b) => a - b);

  let total = 0;

  for (const value of divisor) {
    if (value === number) break;
    total += value;
  }

  if (total === number) {
    console.log(
      `${number} = ${divisor.slice(0, divisor.length - 1).join(" + ")}`
    );
  } else {
    console.log(`${number} is NOT perfect.`);
  }
}
