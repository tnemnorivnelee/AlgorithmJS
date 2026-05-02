function solution(name) {
    let answer = 0;
    
    let minMove = name.length - 1;
    
    for (let i = 0; i < name.length; i++) {
        const right = name[i].charCodeAt() - "A".charCodeAt();
        const left = 26 - right;
        const minDistance = Math.min(right, left);
        
        answer += minDistance;
        
        let nextIndex = i + 1;
        
        while (nextIndex < name.length && name[nextIndex] === "A") {
            nextIndex++;
        }
        
        minMove = Math.min(minMove, (i * 2) + name.length - nextIndex, i + (name.length - nextIndex) * 2);
        
        
    }
    
    answer += minMove
    
    return answer;
}