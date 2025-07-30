const fs = require('fs');

const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const count = Number(input[0]);
let result = 0;

for (let i = 0; i < count; i++) {
    result += Number(input[1][i]);
}

console.log(result);

