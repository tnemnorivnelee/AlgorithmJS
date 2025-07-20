const fs = require("fs");

let input = fs.readFileSync(0).toString().trim().split('\n');

let [hour, minute] = input[0].split(" ").map(Number);
let cookingTime = Number(input[1]);

minute += cookingTime;

if (minute >= 60) {
  hour += Math.floor(minute / 60);
  minute %= 60;

  if (hour >= 24) {
    hour -= 24;
  }
}

console.log(hour, minute);
