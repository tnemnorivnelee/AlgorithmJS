function solution(array, commands) {
    var answer = [];
    
    for (let i = 0; i < commands.length; i++) {
        const [head, tail, idx] = commands[i];
        answer.push(array.slice(head - 1, tail).sort((a,b) => a - b)[Number(idx) - 1]);
    }
    
    return answer;
}