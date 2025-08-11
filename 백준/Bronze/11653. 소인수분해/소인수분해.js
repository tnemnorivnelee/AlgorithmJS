const fs = require("fs");

const input = fs.readFileSync(0).toString().trim();

let number = Number(input);

const result = [];

for (let i = 2; i <= Math.sqrt(number); i++) {
  while (number % i === 0) {
    result.push(i);
    number /= i;
  }
}

if (number > 1) {
  result.push(number);
}

if (Number(input) !== 1) {
  console.log(result.join("\n"));
}
