function solution(x, n) {
    const answer = [];
    
    for (let i = 0; i < n; i++) {
        if (!answer.length) answer.push(x);
        else answer.push(answer[i - 1] + x);
    }
    
    return answer;
}