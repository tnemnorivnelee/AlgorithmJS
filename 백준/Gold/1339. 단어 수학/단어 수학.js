const fs = require("fs");

// 백준 제출용 입력 처리 (로컬 테스트 시에는 "./input.txt"를 사용하세요)
const input = fs
  .readFileSync(0, "utf-8")
  .toString()
  .trim()
  .split("\n");

function solution(input) {
  const words = input.slice(1);
  const alphabetScores = Array.from({ length: 26 }).fill(0);

  for (let i = 0; i < words.length; i++) {
    const word = words[i];

    for (let j = 0; j < word.length; j++) {
      alphabetScores[word[j].charCodeAt() - 65] += 10 ** (word.length - j - 1);
    }
  }
  alphabetScores.sort((a, b) => b - a);

  let tempScore = 9;
  let result = 0;

  for (let i = 0; alphabetScores[i] !== 0; i++) {
    alphabetScores[i] *= tempScore--;
    result += alphabetScores[i];
  }

  console.log(result);
}

solution(input);
