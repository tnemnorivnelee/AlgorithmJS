function solution(N, number) {
    const dp = Array.from({length: 9}, () => new Set());
    
    for (let k = 1; k <= 8; k++) {
        const concatenatedNum = Number(String(N).repeat(k));
        dp[k].add(concatenatedNum);
        
        for (let i = 1; i < k; i++) {
            const j = k - i;
            
            for (const num1 of dp[i]) {
                for (const num2 of dp[j]) {
                    dp[k].add(num1 + num2);
                    dp[k].add(num1 - num2);
                    dp[k].add(num1 * num2);
                    
                    if (num2 !== 0) {
                        dp[k].add(Math.floor(num1 / num2));
                    }
                }
            }
        }
        
        if (dp[k].has(number)) {
            return k;
        }
    }
    return -1;
}