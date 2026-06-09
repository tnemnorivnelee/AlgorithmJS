function isPrime(value) {
    if (value <= 1) return false;
    
    for (let i = 2; i <= Math.sqrt(value); i++) {
        if (value % i === 0) return false;
    }
    return true;
}

function solution(n, k) {
    var answer = 0;
    
    const arr = n.toString(k).split("0").map(Number);
    
    for (let i = 0; i < arr.length; i++) {
        if (isPrime(arr[i])) answer++;
    }
    
    return answer;
}