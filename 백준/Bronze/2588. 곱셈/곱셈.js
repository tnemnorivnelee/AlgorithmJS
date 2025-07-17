const fs = require("fs");

let input = fs.readFileSync('/dev/stdin').toString().trim().split("\n").map(Number);

const [num1, num2] = input;

const num2_1 = num2 % 10;
const num2_2 = (num2 % 100) - num2_1;
const num2_3 = (num2 % 1000) - num2_1 - num2_2;

const result = `${num1 * num2_1}\n${num1 * (num2_2 / 10)}\n${
  num1 * (num2_3 / 100)
}\n${num1 * num2}`;

console.log(result);
