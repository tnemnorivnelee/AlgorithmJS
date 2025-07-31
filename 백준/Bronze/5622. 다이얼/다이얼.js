const fs = require("fs");

const input = fs.readFileSync(0).toString().trim().split('');

const dial = ["ABC", "DEF", "GHI", "JKL", "MNO", "PQRS", "TUV", "WXYZ"];

let result = 0;

for (const char of input) {
  for (let i = 0; i < dial.length; i++) {
    if (dial[i].includes(char)) result += i + 3;
  }
}

console.log(result);
