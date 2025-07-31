const fs = require("fs");

const input = fs.readFileSync(0).toString().trim();

const number = Number(input);

const result = [];

let starCount = 1;

for (let i = 1; i <= number; i++) {
  let temp = "";
  for (let j = 0; j < number - i; j++) {
    temp += " ";
  }
  temp += "*".repeat(starCount);
  result.push(temp);
  starCount += 2;
}

result.push(...result.slice(0, number - 1).reverse());

console.log(result.join("\n"));
