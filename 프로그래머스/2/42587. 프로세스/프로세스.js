function solution(priorities, location) {
    let answer = 0;
    
    const prioritiesLen = priorities.length;
    
    const queue = Array.from({ length: prioritiesLen }).fill(0);
    
    for (let i = 0; i < prioritiesLen; i++) {
        queue[i] = {
            index: i,
            priority: priorities[i],
        };
    }
 
    while (queue.length) {
        const data = queue.shift();
        
        if (queue.some((v) => v.priority > data.priority)) {
            queue.push(data);
            
        } else {
             answer++;
            if (data.index === location) break;
        }
    }
    return answer;
}