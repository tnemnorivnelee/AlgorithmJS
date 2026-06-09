function isPrime(value) {
    if (value <= 1) return false;
    
    for (let i = 2; i <= Math.sqrt(value); i++) {
        if (value % i === 0) return false;
    }
    return true;
}

function solution(n, k) {
    return n.toString(k).split("0").map(Number).filter((v) => isPrime(v)).length;
}