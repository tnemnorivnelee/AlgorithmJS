// n개의 송전탑이 전선을 통해 하나의 트리 형태로 연결되어 있다
// 당신은 이 전선들 중 하나를 끊어서 현재의 전력망 네트워크를 2개로 분할하려고 한다

// 이때, 두 전력망이 갖게 되는 송전탑의 개수를 최대한 비슷하게 맞추고자 한다

// 송전탑의 개수 n 그리고 전선 정보 wires가 매개변수로 주어진다
// 전선들 중 하나를 끊어서 송전탑 개수가 가능한 비슷하도록 두 전력망으로 나누었을 때
// 두 전력망이 가지고 있는 송전탑 개수의 차이(절대값)을 return 하는 함수를 완성하라

function solution(n, wires) {
    let minDiff = Number.MAX_SAFE_INTEGER;
    
    const graph = new Map();
    
    for (const [a, b] of wires) {
        if (!graph.has(a)) graph.set(a, []);
        if (!graph.has(b)) graph.set(b, []);
        
        graph.get(a).push(b);
        graph.get(b).push(a);
    }
    
    for (const [a, b] of wires) {
        const queue = [a];
        
        const visited = new Map();
        visited.set(a, true);
        
        let count = 0;
        
        while (queue.length > 0) {
            const current = queue.shift();
            count++;
            
            for (const next of graph.get(current)) {
                if ((current === a) && (next === b)
                   || (current === b) && (next === a)) {
                    continue;
                }
                
                if (!visited.get(next)) {
                    visited.set(next, true);
                    queue.push(next);
                }
            }
        }
        const diff = Math.abs(count - (n - count));
        minDiff = Math.min(minDiff, diff);
    }
    return minDiff;
}