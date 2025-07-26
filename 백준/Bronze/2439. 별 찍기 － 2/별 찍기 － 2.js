const fs = require('fs');

const input = fs.readFileSync('/dev/stdin').toString();

let result = "";

for (let i = 0; i < input; i++) {
    let count = input - 1;
    for (let j = i; j < count; j++) {
        result += ' ';
    }
    for (let k = 0; k < i+1; k++) {
        result += '*';
    }
    result += '\n';
}
console.log(result);