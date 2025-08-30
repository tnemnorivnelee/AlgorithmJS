const fs = require("fs");

const input = fs.readFileSync("./dev/stdin").toString().trim().split(/\r?\n/);

const [N, M] = input.shift().split(" ").map(Number);
const poketmons = input.splice(0, N);
const questions = input;

const result = [];

const nameToNumMap = new Map();
const numToNameMap = new Map();

poketmons.forEach((poketmon, index) => {
  const poketmonNum = index + 1;

  nameToNumMap.set(poketmon, poketmonNum);
  numToNameMap.set(poketmonNum, poketmon);
})

for (const question of questions) {
  if (isNaN(question)) {
    result.push(nameToNumMap.get(question));
  } else {
    const num = Number(question);
    result.push(numToNameMap.get(num));
  }
}

console.log(result.join("\n"));