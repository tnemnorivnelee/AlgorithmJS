const fs = require('fs');

const input = fs.readFileSync('/dev/stdin').toString().split(' ');

const word = input[0];

const arr = [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1];

for (let i = 0; i < word.length; i++) {
    if (arr[word.charCodeAt(i) - 97] === -1) {
        arr[word.charCodeAt(i) - 97] = i;
    }
}

let result = "";

for (let i = 0; i < arr.length; i++) {
    result += arr[i] + " ";
}

console.log(result);
