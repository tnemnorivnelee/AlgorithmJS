function solution(bridge_length, weight, truck_weights) {
    let time = 0;
    let index = 0;
    let head = 0;
    let totalWeight = 0;
    
    const queue = [];
    
    while (index < truck_weights.length) {
        time++;
        
        if (queue.length > head && queue[head].mt === time) {
            totalWeight -= queue[head].tw;
            head++;
        }
        
        
        if (queue.length - head <= bridge_length && totalWeight + truck_weights[index] <= weight) {
            const tw = truck_weights[index];
            queue.push({ mt: time +  bridge_length, tw });
            totalWeight += tw;
            index++;
        }
    }
    
    return queue[queue.length - 1].mt;
}