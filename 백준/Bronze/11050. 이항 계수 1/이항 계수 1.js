const fs = require("fs");

const input = fs.readFileSync("./dev/stdin").toString().trim();

const [N, K] = input.split(" ").map(Number);

const factorial = (num) => {
  if (num === 0) {
    return 1;
  } else {
    return factorial(num - 1) * num;
  }
};

let numerator = factorial(N);
let denominator = factorial(N - K) * factorial(K);

console.log(numerator / denominator);
