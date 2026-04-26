const fs = require("fs");

// 백준 제출용 입력 처리 (로컬 테스트 시에는 "./input.txt"를 사용하세요)
const input = fs
  .readFileSync(0, "utf-8")
  .toString()
  .trim()
  .split("\n")
  .map(Number)
  .slice(1)
  .sort((a, b) => b - a);

function solution(input) {
  const positive = input.filter((value) => value > 0);
  const negative = input.filter((value) => value < 0).sort((a, b) => a - b);
  let zeroCount = input.filter((value) => value === 0).length;

  let result = 0;

  for (let i = 0; i < positive.length - 1; i += 2) {
    if (positive[i] === 1 || positive[i + 1] === 1) {
      result += positive[i] + positive[i + 1];
    } else {
      result += positive[i] * positive[i + 1];
    }
  }

  if (positive.length % 2 !== 0) {
    result += positive[positive.length - 1];
  }

  for (let i = 0; i < negative.length - 1; i += 2) {
    result += negative[i] * negative[i + 1];
  }

  if (negative.length % 2 !== 0) {
    if (zeroCount === 0) result += negative[negative.length - 1];
  }

  console.log(result);
}

solution(input);
