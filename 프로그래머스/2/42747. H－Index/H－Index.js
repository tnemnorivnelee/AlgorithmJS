function solution(citations) {
    const sortedByDesc = citations.sort((a, b) => b - a);
    
    console.log(sortedByDesc);
    
    let answer = 0;
    
    for (let i = 0; i < sortedByDesc.length; i++) {
        if (i + 1 <= sortedByDesc[i]) {
            answer = i + 1;
        }
    }
    
    return answer;
    
}