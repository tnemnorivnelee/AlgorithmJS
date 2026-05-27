function solution(n, words) {
    const usedWords = new Set();
    usedWords.add(words[0]);
    
    for (let i = 1; i < words.length; i++) {
        const head = words[i - 1];
        const tail = words[i];
        
        if (head[head.length - 1] !== tail[0] || usedWords.has(words[i])) {
            return [i % n + 1, Math.floor(i / n) + 1];
        }
        usedWords.add(words[i]);
    }
    return [0, 0];
}