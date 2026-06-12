function solution(priorities, location) {
    let answer = 0;

    const queue = priorities.map((v, i) => ({ index: i, priority: v }));
    
    while (queue.length) {
        let max = Math.max(...queue.map((v) => v.priority));
        const first = queue.shift();
        
        
        if (max !== first.priority) {
            queue.push(first);  
        } else {
            answer++;
            if (first.index === location) break;
        }
    }
    
    return answer;
}