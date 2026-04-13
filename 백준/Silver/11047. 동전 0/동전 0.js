const fs = require("fs");

const input = fs.readFileSync(0).toString().trim().split("\n");

function solution(input) {
  let [N, K] = input[0].split(" ").map(Number);
  let result = 0;

  for (let i = N; i >= 0; i--) {
    let coin = Number(input[i]);

    if (coin <= K) {
      result += Math.floor(K / coin);
      K %= coin;
    }
  }

  console.log(result);
}

solution(input);
