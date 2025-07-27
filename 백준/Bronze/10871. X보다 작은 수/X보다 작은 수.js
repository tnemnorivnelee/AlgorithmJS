const fs = require("fs");

const input = fs.readFileSync(0).toString().trim().split('\n');

let result = "";

const [N, X] = input[0].split(" ").map(Number);
const numbers = input[1].split(" ").map(Number);

for (const number of numbers) {
  if (number < X) result += number + " ";
}

console.log(result);
