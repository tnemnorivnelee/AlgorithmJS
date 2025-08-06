const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n').map(Number);

const T = input[0];

const coins = {
  Quarter: 25,
  Dime: 10,
  Nickel: 5,
  Penny: 1,
};

for (let i = 1; i <= T; i++) {
  let change = input[i];

  const quarterCount = Math.floor(change / coins.Quarter);
  change %= coins.Quarter;

  const dimeCount = Math.floor(change / coins.Dime);
  change %= coins.Dime;

  const nickelCount = Math.floor(change / coins.Nickel);
  change %= coins.Nickel;

  const pennyCount = change;

  console.log(quarterCount, dimeCount, nickelCount, pennyCount);
}