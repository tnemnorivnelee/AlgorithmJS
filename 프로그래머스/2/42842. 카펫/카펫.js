function solution(brown, yellow) {
    const result = [];
    
    const area = brown + yellow;
    
    const prime = [];
    
    for (let i = 1; i <= Math.sqrt(area); i++) {
        const w = area / i;
        const h = i;
        
        if (area  % i === 0 && (w - 2) * (h - 2) === yellow) {
            result.push(w, h);
        }
    }
    return result;
}