const fs = require("fs");

const input = fs.readFileSync(0).toString().trim().split('\n');

const testcase = Number(input[0]);

input.forEach(
  (value, index, array) => (array[index] = value.replace("\r", ""))
);

const result = [];

for (let i = 1; i <= testcase; i++) {
  const firstChar = input[i].charAt(0);
  const lastChar = input[i].charAt(input[i].length - 1);

  result.push(firstChar + lastChar);
}

console.log(result.join("\n"));
