const fs = require("fs");

let input = fs.readFileSync(0).toString().trim().split(' ');

const arr = [];

for (let number of input) {
  let temp = "";
  let j = 0;
  for (let i = number.length - 1; i >= 0; i--) {
    temp += number[i];
  }
  arr.push(Number(temp));
}

console.log(Math.max(...arr));
