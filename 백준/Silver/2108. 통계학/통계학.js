const fs = require("fs");

const input = fs
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const N = input[0];
const numbers = input.slice(1);

const result1 = Math.round(numbers.reduce((prev, cur) => prev + cur, 0) / N);
const result2 = numbers.sort((a, b) => a - b)[Math.floor(N / 2)];

const tempMap = new Map();

for (const num of numbers) {
  if (tempMap.has(num)) {
    tempMap.set(num, tempMap.get(num) + 1);
  } else {
    tempMap.set(num, 1);
  }
}

let max = 0;
for (const count of tempMap.values()) {
  if (count > max) max = count;
}

const tempArr = [];
for (const [num, count] of tempMap) {
  if (count === max) tempArr.push(num);
}

tempArr.sort((a, b) => a - b);

const result3 = tempArr.length > 1 ? tempArr[1] : tempArr[0];

const result4 = Math.max(...numbers) - Math.min(...numbers);

const result = [];

result.push(result1);
result.push(result2);
result.push(result3);
result.push(result4);

console.log(result.join("\n"));
