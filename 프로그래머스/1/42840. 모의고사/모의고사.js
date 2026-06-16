function solution(answers) {
    const sufojas = [
        [1, 2, 3, 4, 5],
        [2, 1, 2, 3, 2, 4, 2, 5],
        [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]
    ];
    
    const scores = Array.from({ length: sufojas.length }).fill(0);
    
    for (let i = 0; i < sufojas.length; i++) {
        for (let j = 0; j < answers.length; j++) {
            if (sufojas[i][j % sufojas[i].length] === answers[j]) {
                scores[i]++;
            }
        }
    }
    
    const answer = [];
    
    for (let i = 0; i < scores.length; i++) {
        if (Math.max(...scores) === scores[i]) {
            answer.push(i + 1);
        }
    }
    
    return answer;
}