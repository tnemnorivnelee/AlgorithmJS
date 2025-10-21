const fs = require("fs");

const input = fs.readFileSync("./dev/stdin").toString().trim();

const N = Number(input);

const fibonacci = (n) => {
  if (n >= 2) {
    return fibonacci(n - 1) + fibonacci(n - 2);
  } else if (n === 1) {
    return 1;
  } else {
    return 0;
  }
};

console.log(fibonacci(N));
