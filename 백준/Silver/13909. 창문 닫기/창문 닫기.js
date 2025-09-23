const fs = require("fs");

const input = fs.readFileSync("./dev/stdin").toString().trim();

const N = Number(input);

// N 의 약수의 개수가 홀수이면 문이 열린 상태.
// 1, 3, 5 ...
// 홀수이려면 N 의 제곱근의 정수 부분을 약수로 가진다.
const count = Math.floor(Math.sqrt(N));

console.log(count);