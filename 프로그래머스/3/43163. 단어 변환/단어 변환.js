// 프로그래머스 단어 변환

// 두 개의 단어와 단어의 집합이 매겨변수로 주어진다
// 아래와 같은 규칙을 이용하여 begin에서 target으로 변환하는 가장 짧은 변환 과정을 찾으려고 한다

// 1. 한 번에 한 개의 알파벳만 바꿀 수 있다
// 2. words에 있는 단어로만 변환할 수 있다
// 3. words 50개 이하 -> 완전탐색
// 4. 중복 단어 없음
// 5. 방문처리 필요
// 6. 반환할 수 없는 경우에는 0 반환

function solution(begin, target, words) {
    const wordsLen = words.length;
    
    const visited = Array.from({ length: wordsLen }).fill(false);
    
    let currentWord = begin;

    const queue = [];
    queue.push([begin, 0]);

    while (queue.length > 0) {
        const [curWord, time] = queue.shift();

        if (curWord === target) return time;
        
        for (let i = 0; i < wordsLen; i++) {
            const nextWord = words[i];
            
            if (!visited[i]) {
                let count = 0;
                for (let j = 0; j < nextWord.length; j++) {
                   if (curWord[j] !== nextWord[j]) count++;
                }
                if (count === 1) {
                    queue.push([nextWord, time + 1]);
                    visited[i] = true;
                }
            }
            
         
        }
    }
    return 0;
}