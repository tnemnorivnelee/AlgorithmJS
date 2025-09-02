const fs = require("fs");

const input = fs.readFileSync("./dev/stdin").toString().trim().split(/\r?\n/);

const [N, M] = input.slice(0, 1)[0].split(" ").map(Number);

const listN = new Set(input.slice(1, N + 1));
const listM = input.slice(N + 1, N + M + 1);

const result = [];

for (let i = 0; i < listM.length; i++) {
  if (listN.has(listM[i])) {
    result.push(listM[i]);
  }
}

result.sort();

console.log(`${result.length}\n${result.join("\n")}`);
