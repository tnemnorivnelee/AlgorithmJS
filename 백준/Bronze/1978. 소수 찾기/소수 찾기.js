const fs = require('fs');

const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const arr = input[1].split(' ').map(Number);

const isPrime = (num) => {
    if (num === 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

console.log(arr.filter(v => isPrime(v)).length);