function solution(priorities, location) {
    var answer = 0;
    
    const queue = Array.from({ length: priorities.length }, (_, i) => ({ index: i, priority: priorities[i] }));
    
    // console.log(queue);
    
    while (queue.length) {
        const max = Math.max(...queue.map((v) => v.priority));
        const { index, priority } = queue.shift();
        
        if (priority !== max) {
            queue.push({ index, priority });
        } else {
            answer++;
            if (index === location) break;
        }
    }
  
    
    return answer;
}