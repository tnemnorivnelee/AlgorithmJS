function solution(t, p) {
    var answer = 0;
    
    for (let i = 0; i <= t.length - p.length; i++) {
        const comparedNum = t.slice(i, i + p.length);
        console.log(comparedNum);
        if (+comparedNum <= +p) answer++;
    }
    
    return answer;
}