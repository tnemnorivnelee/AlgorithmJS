// 사전에 알파벳 보음 A E I O U 만을 사용하여 만들 수 있는
// 길이 5 이하의 모든 단어가 수록되어 있다
// 사전에 첫 번째 단어는 A 이고, 그 다음은 AA 이며, 마지막 단어는 UUUUU 이다.
// 단어 하나 word 가 매개변수로 주어질 때, 이 단어가 사전에서 몇 번째 단어인지 return

function solution(word) {
    let answer = 0;
    let count = 0;
    
    const alphabets = ['A', 'E', 'I', 'O', 'U'];
    
    function dfs(currentWord, targetWord) {
        if (answer !== 0) return;
        
        if (word === currentWord) {
            answer = count;
            return;
        }
        
        if (currentWord.length === 5) return;
        
        for (let i = 0; i < alphabets.length; i++) {
            count++;
            dfs(currentWord + alphabets[i], targetWord);
        }
    }
    
    dfs("", word);
    
    return answer;
}