function solution(brown, yellow) {
    // 브라운 + 옐로우 = 가로 * 세로
    // 가로, 세로 = 약수 중 하나
    // 가로 >= 세로
    // 가로 = 옐로우 가로길이 + 2
    // 세로 = 옐로우 세로길이 + 2
    
    const divisors = [];
    
    
    for (let i = 1; i <= Math.sqrt(yellow); i++) {
        const w = yellow / i;
        const h = i;
        if (yellow % i === 0 && (w + 2) * (h + 2) === brown + yellow) {
            divisors.push(w + 2);
            divisors.push(h + 2);
        }
    }
    
    // console.log(divisors);
    
    return divisors;
}