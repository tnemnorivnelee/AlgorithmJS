function solution(brown, yellow) {
    
    const divisors = [];
    
    for (let i = 1; i <= Math.sqrt(yellow); i++) {
        if (yellow % i === 0 && (i + 2) * (yellow / i + 2) === brown + yellow) {
            divisors.push(yellow / i);
            divisors.push(i)
        }
    }
    
    return [divisors[0] + 2, divisors[1] + 2];
}