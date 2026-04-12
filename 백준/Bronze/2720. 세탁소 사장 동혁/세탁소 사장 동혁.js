const fs = require("fs");

const input = fs.readFileSync(0).toString().trim().split("\n");

function solution(input) {
  const result = [];

  const units = {
    Quarter: 25,
    Dime: 10,
    Nickel: 5,
    Penny: 1,
  };

  // const T = Number(input[0]); // 테스트 케이스 개수
  const changes = input.slice(1).map(Number);

  for (let i = 0; i < changes.length; i++) {
    let change = changes[i];
    const temp = [0, 0, 0, 0];

    if (change >= units.Quarter) {
      temp[0] = Math.floor(change / units.Quarter);
      change %= units.Quarter;
    }
    if (change >= units.Dime) {
      temp[1] = Math.floor(change / units.Dime);
      change %= units.Dime;
    }
    if (change >= units.Nickel) {
      temp[2] = Math.floor(change / units.Nickel);
      change %= units.Nickel;
    }
    if (change >= units.Penny) {
      temp[3] = Math.floor(change / units.Penny);
      change %= units.Penny;
    }
    result.push(temp.join(" "));
  }

  console.log(result.join("\n"));
}

solution(input);
