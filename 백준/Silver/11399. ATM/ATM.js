const fs = require("fs");

const input = fs.readFileSync(0).toString().trim().split("\n");

function solution(input) {
  const N = Number(input[0]);
  const P = input[1]
    .split(" ")
    .map(Number)
    .sort((a, b) => a - b);

  const result = [];
  let temp = 0;

  for (let i = 0; i < N; i++) {
    temp += P[i];
    result.push(temp);
  }

  console.log(result.reduce((prev, cur) => prev + cur, 0));
}

solution(input);
