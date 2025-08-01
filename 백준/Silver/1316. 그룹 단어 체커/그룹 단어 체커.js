const fs = require("fs");

let input = fs.readFileSync(0).toString().trim().split('\n');

const N = input[0];

const words = [];

let count = 0;

for (let i = 1; i <= N; i++) words.push(input[i].replace("\r", ""));

for (const word of words) {
  const alphabets = Array(26).fill(0); // 소문자는 97, 인덱스는 0

  let temp = word[0];
  alphabets[temp.charCodeAt(0) - 97]++;

  for (let i = 0; i < word.length; i++) {
    if (temp === word[i]) continue;
    alphabets[word[i].charCodeAt(0) - 97]++;
    temp = word[i];
  }

  if (alphabets.every((value) => value < 2)) count++;
}

console.log(count);
