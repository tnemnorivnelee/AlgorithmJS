const fs = require("fs");

const input = fs.readFileSync(0).toString().trim().split("\n");

function solution(input) {
  const N = Number(input[0]);
  const times = [];

  let count = 0;
  let endTime = 0;

  for (let i = 1; i <= N; i++) {
    const [start, end] = input[i].split(" ").map(Number);
    times.push([start, end]);
  }

  times.sort((a, b) => {
    return a[1] === b[1] ? a[0] - b[0] : a[1] - b[1];
  });


  for (let i = 0; i < N; i++) {
    const [nextStartTime, nextEndTime] = times[i];

    if (endTime <= nextStartTime) {
      count++;
      endTime = nextEndTime;
    }
  }
  console.log(count);
}

solution(input);
