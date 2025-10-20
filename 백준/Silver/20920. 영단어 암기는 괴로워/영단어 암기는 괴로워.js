const fs = require("fs");

const input = fs.readFileSync("./dev/stdin").toString().trim().split("\n");

const [N, M] = input[0].split(" ").map(Number);
const words = input.slice(1).map((value) => value.replaceAll("\r", ""));

const filteredWords = words.filter((value) => value.length >= M);

const mapWords = new Map();

for (const word of filteredWords) {
  if (mapWords.has(word)) {
    mapWords.set(word, mapWords.get(word) + 1);
  } else {
    mapWords.set(word, 0);
  }
}

const countedWords = Array.from(mapWords);

countedWords.sort((a, b) => {
  const [wordA, countA] = a;
  const [wordB, countB] = b;

  if (countA !== countB) {
    return countB - countA;
  }

  if (wordA.length !== wordB.length) {
    return wordB.length - wordA.length;
  }

  return wordA.localeCompare(wordB);
})

const result = countedWords.map((value) => value[0]);

console.log(result.join("\n"));