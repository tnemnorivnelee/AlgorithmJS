const fs = require("fs");

const input = fs.readFileSync(0).toString().trim().split("\n");

const N = Number(input[0]);

const xArr = [];
const yArr = [];

for (let i = 1; i <= N; i++) {
  const [x, y] = input[i].split(" ").map(Number);
  xArr.push(x);
  yArr.push(y);
}

const xMax = Math.max(...xArr);
const xMin = Math.min(...xArr);

const yMax = Math.max(...yArr);
const yMin = Math.min(...yArr);

const result = (xMax - xMin) * (yMax - yMin);

console.log(result);
