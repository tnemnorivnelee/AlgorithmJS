function solution(answers) {
    const result = [];
    
    const patterns = [
        [1, 2, 3, 4, 5],
        [2, 1, 2, 3, 2, 4, 2, 5],
        [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]
    ];
    
    // 수포자 1,2,3 의 점수를 저장하는 공간
    const score = new Array(3).fill(0);
    
    for (let i = 0; i < patterns.length; i++) {
        for (let j = 0; j < answers.length; j++) {
            if (answers[j] === patterns[i][j % patterns[i].length]) {
                score[i]++;
            }
        }
    }
    
    
    const maxScore = Math.max(...score);
    
    score.forEach((item, index) => {
        if (item === maxScore) {
            result.push(index + 1);
        }
    });
    
    return result;    
}