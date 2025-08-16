const fs = require("fs");

const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [N, M] = input[0].split(" ").map(Number);

const board = input.slice(1);

let minCount = Infinity;

for (let i = 0; i <= N - 8; i++) {
  for (let j = 0; j <= M - 8; j++) {
    let repaintCount = 0;
    const startColor = board[i][j];

    for (let row = i; row < i + 8; row++) {
      for (let col = j; col < j + 8; col++) {
        const expectedColor =
          (row + col) % 2 === 0 ? startColor : startColor === "W" ? "B" : "W";

        if (board[row][col] !== expectedColor) repaintCount++;
      }
    }

    const oppositeCaseCount = 64 - repaintCount;

    minCount = Math.min(minCount, repaintCount, oppositeCaseCount);
  }
}

console.log(minCount);
