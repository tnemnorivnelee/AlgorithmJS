const fs = require("fs");

const input = fs.readFileSync(0).toString().trim();

let number = Number(input);

let temp = 2;

const result = [];

while (true) {
  if (number < temp) break;

  while (number % temp === 0) {
    result.push(temp);
    number /= temp;
  }

  temp++;
}

if (Number(input) !== 1) {
  console.log(result.join("\n"));
}
