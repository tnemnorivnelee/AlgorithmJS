const fs = require("fs");

const input = fs.readFileSync(0).toString().trim();

function solution(input) {
  let count = 0;
  let change = 1000 - Number(input);

  const coins = [500, 100, 50, 10, 5, 1];

  for (let i = 0; i < coins.length; i++) {
    count += Math.floor(change / coins[i]);
    change %= coins[i];
  }

  console.log(count);
}

solution(input);
