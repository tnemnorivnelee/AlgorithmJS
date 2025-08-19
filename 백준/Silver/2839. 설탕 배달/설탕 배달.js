const fs = require('fs');

let input = Number(fs.readFileSync('/dev/stdin').toString().trim());

let count = 0;

while (true) {
    if (input % 5 === 0) {
        count += input / 5;
        break;
    }

    input -= 3;
    count++;

    if (input < 0) {
        count = -1;
        break;
    }
}

console.log(count);