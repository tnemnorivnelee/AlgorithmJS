const fs = require("fs");

const input = fs.readFileSync("./dev/stdin").toString().trim().split(" ");

const [A, B] = input.map(Number);

const gcd = (a, b) => {
  while (b !== 0)  {
    let r = a % b;

    a = b;
    b = r;
  }
  return a;
}

const lcm = (A * B) / gcd(A, B);

console.log(lcm);