function solution(n, wires) {
    const graph = new Map();
    
    for (const [v1, v2] of wires) {
        if (!graph.has(v1)) graph.set(v1, []);
        if (!graph.has(v2)) graph.set(v2, []);
        graph.get(v1).push(v2);
        graph.get(v2).push(v1);
    }
    
    function bfs(v1, v2) {
        let count = 0;
        
        const queue = [v1];
        const visited = new Set();
        
        visited.add(v1);
        
        let head = 0;
        
        while (queue.length > head) {
            const current = queue[head++];
            count++;

            for (const next of graph.get(current)) {
                if ((current === v1 && next === v2) || (current === v2 && next === v1)) continue;
                
                if (!visited.has(next)) {
                    queue.push(next);
                    visited.add(next);
                }
            }
        }
        return count;
    }
    
    let minDiff = Infinity;
    
    for (const [v1, v2] of wires) {
        const count = bfs(v1, v2);
        const diff = Math.abs(count - (n - count));
        
        minDiff = Math.min(minDiff, diff);
    }
    
    return minDiff;
}