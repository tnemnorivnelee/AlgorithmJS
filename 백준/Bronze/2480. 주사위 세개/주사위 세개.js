const fs = require("fs");

let input = fs.readFileSync(0).toString().trim().split(' ').map(Number);

let [dice1, dice2, dice3] = input;

const filteredNum = input.filter(
  (item, index) => input.indexOf(item) !== index
);

if (filteredNum.length) {
  if (dice1 === dice2 && dice2 === dice3) {
    console.log(10000 + dice1 * 1000);
  } else {
    console.log(1000 + filteredNum * 100);
  }
} else {
  let maxNum = Math.max(...input);
  console.log(maxNum * 100);
}
