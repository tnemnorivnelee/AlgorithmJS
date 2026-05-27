function solution(n, words) {
    const stack = [];
    stack.push(words[0]);
    
    for (let i = 1; i < words.length; i++) {
        const headWord = words[i - 1];
        const tailWord = words[i];
        
        if (headWord[headWord.length - 1] !== tailWord[0] || stack.includes(words[i])) {
            return [(i % n) + 1, Math.floor(i / n) + 1]
        }
        stack.push(words[i]);
    }

    return [0, 0];
}