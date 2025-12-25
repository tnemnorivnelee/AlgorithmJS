function solution(answers) {
    const sufoja1 = [1, 2, 3, 4, 5];
    const sufoja2 = [2, 1, 2, 3, 2, 4, 2, 5]
    const sufoja3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
    
    const sufojas = [sufoja1, sufoja2, sufoja3];
    
    // console.log(sufojas);
    
    const scores = [0, 0, 0];
    
    for (let i = 0; i < sufojas.length; i++) {
        for (let j = 0; j < answers.length; j++) {
            if (answers[j] === sufojas[i][j % sufojas[i].length]) {
                scores[i]++;
            }
        }
    }
    
    // console.log(scores);
    
    const maxScore = Math.max(...scores);
    
    const answer = [];
    
    for (let i = 0; i < scores.length; i++) {
        if (scores[i] === maxScore) answer.push(i + 1);
    }
    
    // console.log(answer);
    return answer;
}