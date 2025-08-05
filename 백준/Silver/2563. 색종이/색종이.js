const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const N = Number(input[0]);

const paper = Array.from({ length: 101 }, () => Array(101).fill(0));

for (let i = 1; i <= N; i++) {
  const [x, y] = input[i].split(' ').map(Number);

  for (let row = y; row < y + 10; row++) {
    for (let col = x; col < x + 10; col++) {
      if (row < 101 && col < 101) {
        paper[row][col] = 1;
      }
    }
  }
}

const totalArea = paper.flat().reduce((sum, cell) => sum + cell, 0);

console.log(totalArea);