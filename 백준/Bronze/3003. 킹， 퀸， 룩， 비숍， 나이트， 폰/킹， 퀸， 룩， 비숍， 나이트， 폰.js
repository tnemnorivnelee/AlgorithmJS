const fs = require("fs");

const input = fs.readFileSync(0).toString().trim().split(' ').map(Number);

const chess = [1, 1, 2, 2, 2, 8];

for (let i = 0; i < input.length; i++) {
  chess[i] -= input[i];
}

console.log(chess.join(" "));
