const fs = require("fs");

const input = fs.readFileSync("./dev/stdin").toString().trim().split("\n");

const N = Number(input[0]);
const M = Number(input[2]);

const sangGeunCards = input[1].split(" ").map(Number);
const cards = input[3].split(" ").map(Number);

const sangGeunMap = new Map();

sangGeunCards.forEach((value) => {
  if (sangGeunMap.has(value)) {
    sangGeunMap.set(value, Number(sangGeunMap.get(value)) + 1);
  } else {
    sangGeunMap.set(value, 1);
  }
});

const result = [];

cards.forEach((value) => {
  if (sangGeunMap.has(value)) {
    result.push(sangGeunMap.get(value));
  } else {
    result.push(0);
  }
});

console.log(result.join(" "));
