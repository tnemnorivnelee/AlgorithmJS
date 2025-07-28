const fs = require("fs");

const input = fs.readFileSync(0).toString().trim().split('\n');

const [N, M] = input[0].split(" ").map(Number);

const result = new Array(N + 1).fill(0);

for (let i = 1; i <= M; i++) {
  const [firstBasket, lastBasket, ballNumber] = input[i].split(" ").map(Number);

  for (let j = firstBasket; j <= lastBasket; j++) {
    result[j] = ballNumber;
  }
}

console.log(result.slice(1).join(" "));
