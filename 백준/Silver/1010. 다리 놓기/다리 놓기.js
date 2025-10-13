const fs = require("fs");

const input = fs.readFileSync("./dev/stdin").toString().trim().split("\n");

const T = Number(input[0]);

const factorial = (num) => {
  if (num === 0) {
    return 1;
  } else {
    return num * factorial(num - 1);
  }
};

const result = [];

for (let i = 1; i <= T; i++) {
  const [N, K] = input[i].split(" ").map(Number);

  const numerator = factorial(K);
  const denominator = factorial(K - N) * factorial(N);

  result.push(Math.round(numerator / denominator));
}

console.log(result.join("\n"));
