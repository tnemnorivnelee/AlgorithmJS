function solution(s) {
    const answer = [0, 0];
    
    const numbers = s.split(" ").map(Number);
    
    const max = Math.max(...numbers);
    const min = Math.min(...numbers);
    
    answer[0] = min;
    answer[1] = max;
    
    return answer.join(" ");
}