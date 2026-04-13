const fs = require("fs");

const input = fs.readFileSync(0).toString().trim().split("\n");

function solution(input) {
  let [N, K] = input.shift().split(" ").map(Number);
  const units = input.map(Number).sort((a, b) => b - a);
  let result = 0;

  for (let i = 0; i < N; i++) {
    if (units[i] <= K) {
      result += Math.floor(K / units[i]);
      K %= units[i];
    }
  }

  console.log(result);
}

solution(input);
