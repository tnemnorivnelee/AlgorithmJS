const fs = require("fs");

let input = fs.readFileSync(0).toString().trim().split('\n');

let total = Number(input[0]);
let length = Number(input[1]);

let newTotal = input.splice(2).reduce((acc, num) => {
  let [num1, num2] = num.split(" ").map(Number);
  return acc + num1 * num2;
}, 0);

console.log(total === newTotal ? "Yes" : "No");
