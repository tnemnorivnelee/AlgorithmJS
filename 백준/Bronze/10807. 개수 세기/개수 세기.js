const fs = require("fs");

let input = fs.readFileSync(0).toString().trim().split('\n');

let [N, numbers, target] = input;

numbers = numbers.split(" ").map(Number);
target = Number(target);

let result = 0;

for (let number of numbers) {
  if (number === target) result++;
}

console.log(result);
