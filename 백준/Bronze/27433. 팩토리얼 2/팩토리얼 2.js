const fs = require("fs");

const input = fs.readFileSync("./dev/stdin").toString().trim();

const N = Number(input);

const factorial = (n) => {
  if (n === 0) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
};

console.log(factorial(N));
