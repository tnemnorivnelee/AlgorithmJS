const fs = require("fs");

let input = fs.readFileSync(0).toString().trim().split('\n');

let testcase = Number(input[0]);

for (let i = 1; i <= testcase; i++) {
  let nums = input[i].split(" ").map(Number);
  let [num1, num2] = nums;

  console.log(num1 + num2);
}
