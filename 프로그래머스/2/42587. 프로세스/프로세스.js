function solution(priorities, location) {
    var answer = 0;

    const queue = priorities.map((value, index) => {
        return {index: index, priority: value};
    });
    
    let printCount = 0;
    
    while (queue.length > 0) {
        const currentDocument = queue.shift();
        
        const hasHigherPriority = queue.some(({index, priority}) => {
            return currentDocument.priority < priority;
        });
        
        if (hasHigherPriority) {
            queue.push(currentDocument);
        } else {
            printCount++;
            
            if (currentDocument.index === location) {
                answer = printCount;
                break;
            }
        }
    }
    
    
    
    
    
    return answer;
}