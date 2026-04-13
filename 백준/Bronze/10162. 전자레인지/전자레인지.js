const fs = require("fs");

const input = fs.readFileSync(0).toString().trim();

function solution(input) {
  let T = Number(input);

  const ABC = [300, 60, 10];
  const counts = [0, 0, 0];

  if (T % ABC[ABC.length - 1] !== 0) {
    console.log(-1);
    return;
  }

  for (let i = 0; i < ABC.length; i++) {
    counts[i] = Math.floor(T / ABC[i]);
    T %= ABC[i];
  }

  console.log(counts.join(" "));
}

solution(input);
