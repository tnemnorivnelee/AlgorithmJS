function solution(citations) {
    var answer = 0;
    
    const sortedCitations = citations.sort((a, b) => b - a);
    
    for (let i = 0; i < sortedCitations.length; i++) {
        if (i + 1 > sortedCitations[i]) {
            return i;
        }
    }
    return sortedCitations.length;
}