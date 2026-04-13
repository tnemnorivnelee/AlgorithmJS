const fs = require("fs");

const input = fs.readFileSync(0).toString().trim();

function solution(input) {
  let T = Number(input);

  const ABC = [300, 60, 10];
  const counts = [0, 0, 0];

  counts[0] = Math.floor(T / ABC[0]);
  T %= ABC[0];

  counts[1] = Math.floor(T / ABC[1]);
  T %= ABC[1];

  counts[2] = Math.floor(T / ABC[2]);
  T %= ABC[2];

  if (
    Number(input) ===
    ABC[0] * counts[0] + ABC[1] * counts[1] + ABC[2] * counts[2]
  ) {
    console.log(counts.join(" "));
  } else {
    console.log(-1);
  }
}

solution(input);
