const fs = require("fs");

const input = fs.readFileSync("./dev/stdin").toString().trim().split("\n");

const T = Number(input[0]);
const result = [];

let count = 0;

const recursion = (word, left, right) => {
  count++;
  if (left >= right) return 1;
  else if (word[left] !== word[right]) return 0;
  else return recursion(word, left + 1, right - 1);
};

const isPalindrome = (word) => {
  return recursion(word, 0, word.length - 1);
};

for (let i = 1; i <= T; i++) {
  // console.log(input[i]);
  result.push([isPalindrome(input[i].trim()), count]);
  count = 0;
}

console.log(result.map((value) => value.join(" ")).join("\n"));
