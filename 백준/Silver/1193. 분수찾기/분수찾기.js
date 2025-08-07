const fs = require("fs");

const input = fs.readFileSync(0).toString().trim();

const X = Number(input);

let line = 1;
let sum = 0;

while (sum + line < X) {
  sum += line;
  line++;
}

const orderInLine = X - sum;

let A; // 분자
let B; // 분모

if (line % 2 === 0) {
  A = orderInLine;
  B = line - orderInLine + 1;
} else {
  A = line - orderInLine + 1;
  B = orderInLine;
}

console.log(`${A}/${B}`);
