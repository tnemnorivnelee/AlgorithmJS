function solution(brown, yellow) {
    // 가로 >= 세로
    // 가로 * 세로 = brown + yellow
    // 가로 세로는 yellow 의 약수
    
    const divisors = [];
    
    for (let i = 1; i <= Math.sqrt(yellow); i++) {
        const w = yellow / i + 2;
        const h = i + 2;
        
        if (w * h === brown + yellow && w >= h) {
            divisors.push(w);
            divisors.push(h);
        }
    }
    return divisors;    
}