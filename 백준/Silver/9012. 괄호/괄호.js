const fs = require("fs");

const input = fs.readFileSync("./dev/stdin").toString().trim().split("\n");

const T = input[0];

const result = [];

for (let i = 1; i <= T; i++) {
  while (input[i].includes("()")) {
    input[i] = input[i].replace("()", "");
  }
  input[i].length !== 0 ? result.push("NO") : result.push("YES");
}

console.log(result.join("\n"));
