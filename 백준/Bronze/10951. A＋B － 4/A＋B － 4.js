const fs = require("fs");

let input = fs.readFileSync(0).toString().trim().split('\n');

let result = "";

for (let i = 0; i < input.length; i++) {
  let [num1, num2] = input[i].split(" ").map(Number);

  result += `${num1 + num2}\n`;
}

console.log(result);
