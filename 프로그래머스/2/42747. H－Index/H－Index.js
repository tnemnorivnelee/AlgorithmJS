function solution(citations) {
    const sorted = citations.sort((a, b) => b - a);
    
    let answer = 0;
    
    for (let i = 0; i < sorted.length; i++) {
        if (sorted[i] >= (i + 1)) {
            answer++;
        }
    }
    
    // console.log(answer);
    return answer;
}