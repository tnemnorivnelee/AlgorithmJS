class minHeap {
    constructor() {
        this.heap = [];
    }
    
    push(val) {
        this.heap.push(val);
        
        let idx = this.heap.length - 1;
        
        while (idx > 0) {
            let parentIdx = Math.floor((idx - 1) / 2);
            
            if (this.heap[parentIdx][1] <= this.heap[idx][1]) break;
            
            [this.heap[parentIdx], this.heap[idx]] = [this.heap[idx], this.heap[parentIdx]];
            idx = parentIdx;
        }
    }
    
    pop() {
        if (this.heap.length === 1) return this.heap.pop();
        
        const min = this.heap[0];
        this.heap[0] = this.heap.pop();
        
        let idx = 0;
        
        while (true) {
            let leftChildIdx = idx * 2 + 1;
            let rightChildIdx = idx * 2 + 2;
            let smallestIdx = idx;
            
            if (leftChildIdx < this.heap.length
                && this.heap[leftChildIdx][1] < this.heap[smallestIdx][1]) {
                smallestIdx = leftChildIdx;
            }
            if (rightChildIdx < this.heap.length
                && this.heap[rightChildIdx][1] < this.heap[smallestIdx][1]) {
                smallestIdx = rightChildIdx;
            }
            if (smallestIdx === idx) break;
            
            [this.heap[smallestIdx], this.heap[idx]] = [this.heap[idx], this.heap[smallestIdx]];
            idx = smallestIdx;
        }
        return min;
    }
    
    isEmpty() {
        return this.heap.length === 0;
    }
}

function solution(n, paths, gates, summits) {
    const graph = Array.from({ length: n + 1 }, () => []);
    const isSummit = new Set(summits);
    const isGate = new Set(gates);
    
    for (const [i, j, w] of paths) {
        if (isGate.has(i) || isSummit.has(j)) {
            graph[i].push([j, w]);
        } else if (isGate.has(j) || isSummit.has(i)) {
            graph[j].push([i, w]);
        } else {
            graph[i].push([j, w]);
            graph[j].push([i, w]);
        }
    }
    
    const pq = new minHeap();
    const intensities = Array(n + 1).fill(Infinity);
    
    for (const gate of gates) {
        pq.push([gate, 0]);
        intensities[gate] = 0;
    }
    
    while (!pq.isEmpty()) {
        const [node, currentIntensity] = pq.pop();
        
        if (isSummit.has(node)) continue;
        
        if (currentIntensity > intensities[node]) continue;
        
        for (const [nextNode, weight] of graph[node]) {
            const nextIntensity = Math.max(currentIntensity, weight);
            
            if (nextIntensity < intensities[nextNode]) {
                intensities[nextNode] = nextIntensity;
                pq.push([nextNode, nextIntensity]);
            }
        }
    }
    
    let minIntensity = Infinity;
    let minSummit = Infinity;
    
    summits.sort((a, b) => a - b);
    
    for (const summit of summits) {
        if (intensities[summit] < minIntensity) {
            minIntensity = intensities[summit];
            minSummit = summit;
        }
    }
    return [minSummit, minIntensity];
}