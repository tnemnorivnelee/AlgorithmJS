function solution(s) {
    var answer = [];
    let stack = [];
    
    [...s].forEach((v) => {
        if (!stack.includes(v)) answer.push(-1);
        else answer.push(stack.length - stack.lastIndexOf(v));
        stack.push(v);
    })
    
    return answer;
}