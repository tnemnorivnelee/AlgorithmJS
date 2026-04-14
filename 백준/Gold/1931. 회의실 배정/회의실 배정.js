const fs = require("fs");

const input = fs.readFileSync(0).toString().trim().split("\n");

function solution(input) {
  const N = Number(input[0]);
  const times = input.slice(1).sort((a, b) => {
    const [aFirst, aSecond] = a.split(" ").map(Number);
    const [bFirst, bSecond] = b.split(" ").map(Number);

    return aSecond === bSecond ? aFirst - bFirst : aSecond - bSecond;
  });


  const result = [];

  result.push(times[0]);

  for (let i = 1; i < times.length; i++) {
    const prevTime = result[result.length - 1].split(" ").map(Number)[1];
    const startTime = times[i].split(" ").map(Number)[0];

    if (startTime >= prevTime) result.push(times[i]);
  }
  console.log(result.length);
}

solution(input);
