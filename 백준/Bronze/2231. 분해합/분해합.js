const fs = require('fs');

const input = fs.readFileSync('/dev/stdin').toString();

const num = parseInt(input);

let result = [];

for (let i = 0; i < num; i++) {
    const M = i.toString();

    const digit = M.split("").map(x => Number(x));

    let sum = 0;

    for (let j = 0; j < digit.length; j++) {
        sum += digit[j];
    }

    sum += Number(M);

    if (sum === num) {
        result.push(M);
    }
}

if (result.length === 0) {
    console.log(0);
} else {
    console.log(Math.min(...result));
}