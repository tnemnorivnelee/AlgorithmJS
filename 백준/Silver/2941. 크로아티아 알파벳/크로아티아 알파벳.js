const fs = require("fs");

let input = fs.readFileSync(0).toString().trim();

const croatiaAlphabet = ["c=", "c-", "dz=", "d-", "lj", "nj", "s=", "z="];

let count = 0;

for (const char of croatiaAlphabet) {
  for (let i = 0; i < input.length; i++) {
    if (input.includes(char)) {
      input = input.replace(char, " ");
      count++;
    }
  }
}

input = input.replaceAll(" ", "");

console.log(count + input.length);
