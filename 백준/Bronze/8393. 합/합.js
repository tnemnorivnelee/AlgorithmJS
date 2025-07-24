const fs = require("fs");

let input = fs.readFileSync(0).toString().trim();

input = Number(input);

let result = 0;

for (let i = 1; i <= input; i++) {
  result += i;
}

console.log(result);
