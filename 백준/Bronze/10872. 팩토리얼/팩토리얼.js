const fs = require("fs");

const input = fs.readFileSync("./dev/stdin").toString().trim();

let N = Number(input);

if (N === 0) {
  console.log(1);
  return;
}

let result = 1;

while (true) {
  if (N === 0) break;

  result *= N;

  N--;
}

console.log(result);
