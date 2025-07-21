const fs = require('fs');

const input = fs.readFileSync('/dev/stdin').toString().trim().split(' ');
// const input = fs.readFileSync('../input.txt').toString().trim().split(' ');


for (let i = 1; i <= 9; i++) {
    console.log(`${input[0]} * ${i} = ${input[0] * i}`);
}
