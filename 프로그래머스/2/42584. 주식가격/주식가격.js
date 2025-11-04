function solution(prices) {
    const answer = Array.from({length: prices.length}).fill(0);
    const stack = [];
    
    for (let cur = 0; cur < prices.length; cur++) {
        
       while (stack.length > 0 && prices[stack[stack.length - 1]] > prices[cur]) {
           const past = stack.pop();
           answer[past] = cur - past;
       }
        stack.push(cur);
    }
    for (let i = 0; i < stack.length; i++) {
        answer[stack[i]] = prices.length - 1 - stack[i];
    }
    
    return answer;
}