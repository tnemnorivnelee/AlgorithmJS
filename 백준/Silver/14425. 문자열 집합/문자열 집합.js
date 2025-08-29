const fs = require("fs");

const input = fs.readFileSync("./dev/stdin").toString().trim().split("\n");

const [N, M] = input.shift().split(" ").map(Number);

const S = new Set(input.splice(0, N));

const checkList = input;

let result = 0;

for (let i = 0; i < M; i++) {
  if (S.has(checkList[i])) result++;
}

console.log(result);
