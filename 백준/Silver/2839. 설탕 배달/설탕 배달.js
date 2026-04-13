const fs = require("fs");

const input = fs.readFileSync(0).toString().trim();

function solution(input) {
  let targetWeight = Number(input);
  let result = 0;

  while (targetWeight >= 0) {
    if (targetWeight % 5 === 0) {
      result += Math.floor(targetWeight / 5);
      console.log(result);
      return;
    } else {
      targetWeight -= 3;
      result++;
    }
  }

  if (targetWeight < 0) console.log(-1);
}

solution(input);
