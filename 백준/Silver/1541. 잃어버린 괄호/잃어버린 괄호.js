const fs = require("fs");

const input = fs.readFileSync(0).toString().trim();

function solution(input) {
  const first = input.split("-");

  let result = first[0]
    .split("+")
    .map(Number)
    .reduce((prev, cur) => prev + cur, 0);

  for (let i = 1; i < first.length; i++) {
    result -= first[i]
      .split("+")
      .map(Number)
      .reduce((prev, cur) => prev + cur, 0);
  }
  console.log(result);
}

solution(input);
