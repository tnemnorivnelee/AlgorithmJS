const fs = require('fs');

const input = fs.readFileSync('/dev/stdin').toString().trim().split(' ');
// const input = fs.readFileSync('../input.txt').toString().trim().split(' ');


if ((input[0] % 4 === 0 && input[0] % 100 !== 0) || input[0] % 400 === 0) {
    console.log(1);
} else {
    console.log(0);
}