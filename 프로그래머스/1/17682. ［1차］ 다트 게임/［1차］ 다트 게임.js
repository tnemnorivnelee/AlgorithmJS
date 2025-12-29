function solution(dartResult) {
    
    const scores = [0, 0, 0];
    let scoreIndex = -1;
    
    for (let i = 0; i < dartResult.length; i++) {
        const value = dartResult[i];
        
        if (!isNaN(value)) {
            scoreIndex++;
            
            if (value === '1' && dartResult[i + 1] === '0') {
                scores[scoreIndex] = 10;
                i++;
            } else {
                scores[scoreIndex] = parseInt(value, 10);
            }
        } else {
            switch (value) {
                case 'S':
                    scores[scoreIndex] = Math.pow(scores[scoreIndex], 1);
                    break;
                case 'D':
                    scores[scoreIndex] = Math.pow(scores[scoreIndex], 2);
                    break;
                case 'T':
                    scores[scoreIndex] = Math.pow(scores[scoreIndex], 3);
                    break;
                case '*':
                    scores[scoreIndex] *= 2;
                    if (scoreIndex >= 1) scores[scoreIndex - 1] *= 2;
                    break;
                case '#':
                    scores[scoreIndex] *= -1;
                    break;
            }
        }
    }
    
    // console.log(scores);
    
    const answer = scores.reduce((acc, cur) => acc + cur, 0);
    
    return answer;
    
}