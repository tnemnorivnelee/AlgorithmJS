const fs = require("fs");

const input = fs.readFileSync("./dev/stdin").toString().trim();

let strLen = 1;

const result = new Set();

for (let i = 0; i < input.length; i++) {
  for (let j = 0; j < input.length - i; j++) {
    result.add(input.slice(j, j + strLen))
  }
  strLen++;
}
console.log(result.size);