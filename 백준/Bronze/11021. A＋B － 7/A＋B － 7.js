const fs = require("fs");

let input = fs.readFileSync(0).toString().trim().split('\n');

let testcase = input[0];

for (let i = 1; i <= testcase; i++) {
  let [num1, num2] = input[i].split(" ");
  console.log(`Case #${i}: ${Number(num1) + Number(num2)}`);
}
