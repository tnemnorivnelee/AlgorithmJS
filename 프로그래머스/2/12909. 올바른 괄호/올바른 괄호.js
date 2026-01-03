function solution(s){
    let answer = 0;
    
    for (let i = 0; i < s.length; i++) {
        
        if (answer < 0) return false;
        
        if (s[i] === '(') {
            answer++;  
        } else if (s[i] === ')') {
            answer--;
        }
    }
    
    console.log(answer);
    
    return answer === 0 ? true : false;
}