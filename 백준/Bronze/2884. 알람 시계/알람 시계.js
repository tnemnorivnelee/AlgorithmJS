const fs = require("fs");

let input = fs.readFileSync(0).toString().trim().split(' ').map(Number);

let [H, M] = input; // H시 M분, 24시간 표현 사용

if (M < 45) {
  M = 15 + M;

  if (H > 0) {
    console.log(H - 1, M);
  } else {
    console.log(23, M);
  }
} else {
  console.log(H, M - 45);
}

