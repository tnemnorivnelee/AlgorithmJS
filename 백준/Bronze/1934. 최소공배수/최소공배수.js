const fs = require("fs");

const input = fs.readFileSync("./dev/stdin").toString().trim().split(/\r?\n/);

const T = +input.shift();

const gcd = (a, b) => {
  while (b !== 0)  {
    let r = a % b;

    a = b;
    b = r;
  }
  return a;
}

for (let i = 0; i < T; i++) {
  const [A, B] = input.shift().split(" ").map(Number);

  const lcm = (A * B) / gcd(A, B);

  console.log(lcm);
}