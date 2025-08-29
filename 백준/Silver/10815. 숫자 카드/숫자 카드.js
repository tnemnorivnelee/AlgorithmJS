const fs = require("fs");

const input = fs.readFileSync("./dev/stdin").toString().trim().split("\n");

const sangGeunCards = input[1].split(" ").map(Number);
const checkCards = input[3].split(" ").map(Number);

const cardSet = new Set(sangGeunCards);

const result = [];

for (let i = 0; i < checkCards.length; i++) {
  const currentCard = checkCards[i];

  if (cardSet.has(currentCard)) result.push(1);
  else result.push(0);
}

console.log(result.join(" "));

