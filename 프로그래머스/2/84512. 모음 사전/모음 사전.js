function solution(word) {
    let answer = 0;
    let count = 0;
    
    const alphabets = ['A', 'E', 'I', 'O', 'U'];
    
    function dfs(currentWord, targetWord) {
        // 1. 종료 조건
        if (currentWord === targetWord) {
            answer = count;
            return;
        }
        
        if (currentWord.length === 5) return;
        
        // 2. 실행 로직
        for (let i = 0; i < alphabets.length; i++) {
            count++;
            dfs(currentWord + alphabets[i], targetWord);
        }
    }
    
    
    dfs("", word);
    
    return answer;
}