const fs = require("fs");

let input = fs.readFileSync(0).toString().trim().split('\n');

let testcase = input[0];

let result = [];

for (let i = 1; i <= testcase; i++) {
  let [num1, num2] = input[i].split(" ").map(Number);

  result.push(`Case #${i}: ${num1} + ${num2} = ${num1 + num2}`);
}

console.log(result.join("\n"));
