const fs = require("fs");

let input = fs.readFileSync(0).toString().trim().split('\n').map((value) => (value = value.replaceAll("\r", "")));

let result = "";

let maxLength = -1;

for (const i of input) {
  maxLength = Math.max(i.length, maxLength);
}

for (let i = 0; i < maxLength; i++) {
  for (let j = 0; j < input.length; j++) {
    result += input[j][i] ? input[j][i] : "";
  }
}

console.log(result);
