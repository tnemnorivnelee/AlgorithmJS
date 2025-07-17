const fs = require('fs');

const input = fs.readFileSync('/dev/stdin').toString().trim().split(' ');
// const input = fs.readFileSync('../input.txt').toString().trim().split(' ');

let star = '';

for (let i = 1; i <= input; i++) {
    for (let j = 1; j <= i; j++) {
        star += '*';
    }
    star += '\n';
}

console.log(star);



