const fs = require('fs');

const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const N = Number(input[0].split(' ')[0]); // 카드의 개수
const M = Number(input[0].split(' ')[1]); // 딜러가 외친 숫자

const cardNumber = input[1].split(' ').map(Number);

let result = 0;
let temp = 0;

for (let i = 0; i < N; i++) {
    for (let j = i + 1; j < N; j++) {
        for (let k = j + 1; k < N; k++) {
            temp = cardNumber[i] + cardNumber[j] + cardNumber[k];
            if (result < temp && temp <= M) {
                result = temp;
            }
        }
    }
}

console.log(result);