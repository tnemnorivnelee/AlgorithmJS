function solution(d, budget) {
    d.sort((a, b) => a - b);
    
    while (true) {
        const total = d.reduce((acc, cur) => acc + cur, 0);
        
        if (budget >= total) return d.length;
        
        d.pop();
    }    
}