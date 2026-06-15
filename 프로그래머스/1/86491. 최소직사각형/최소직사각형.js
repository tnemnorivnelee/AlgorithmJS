function solution(sizes) {
    var answer = [0, 0];
    
    for (let i = 0; i < sizes.length; i++) {
        const [w, h] = sizes[i];
        
        const longer = Math.max(w, h);
        const shorter = Math.min(w, h);
        
        answer[0] = Math.max(answer[0], longer);
        answer[1] = Math.max(answer[1], shorter);
    }
    
    return answer[0] * answer[1];
}