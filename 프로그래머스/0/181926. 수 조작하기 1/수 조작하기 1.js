function solution(n, control) {
    var answer = 0;
    
    for (let i = 0; i < control.length; i++) {
        const c = control[i];
        
        if (c === "w") answer++;
        else if (c === "s") answer--;
        else if (c === "d") answer += 10;
        else if (c === "a") answer -= 10;
    }
    
    return n + answer;
}