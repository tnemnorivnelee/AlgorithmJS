const fs = require("fs");

const input = fs.readFileSync(0).toString().trim().split('\n');

const N = Number(input[0]);

const scores = input[1].split(" ").map(Number);

const M = Math.max(...scores);

const newScores = scores.map((value) => (value / M) * 100);

const total = newScores.reduce((acc, num) => acc + num, 0);

console.log(total / N);
