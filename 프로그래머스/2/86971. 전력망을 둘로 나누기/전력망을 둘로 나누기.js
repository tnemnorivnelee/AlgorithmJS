// 프로그래머스 전력망을 둘로 나누기

// n개의 송전탑이 전선을 통해 하나의 트리 형태로 연결되어 있습니다.
// 당신은 이 전선들 중 하나를 끊어서 현재의 전력망 네트워크를 2개로 분할하려고 합니다.
// 이때, 두 전력망이 갖게 되는 송전탑의 개수를 최대한 비슷하게 맞추고자 합니다.

// 송전탑의 개수 n
// 전선 정보 wires 가 매개변수로 주어진다.
// 전선들 중 하나를 끊어서 송전탑 개수가 가능한 비슷하도록 두 전력망으로 나누었을 때
// 두 전력망이 가지고 있는 송전탑 개수의 차이(절대값)를 반환하는 함수를 완성하라.


function solution(n, wires) {
    const graph = new Map();
    
    for (const [v1, v2] of wires) {
        if (!graph.has(v1)) graph.set(v1, []);
        if (!graph.has(v2)) graph.set(v2, []);
        
        graph.get(v1).push(v2);
        graph.get(v2).push(v1);
    }
    

    function bfs(v1, v2) {
        const queue = [v1];
        const visited = new Set([v1]);
        let count = 0;
        let head = 0;
        
        while (queue.length > head) {
            const current = queue[head++];
            count++;
            
            for (const next of graph.get(current)) {
                if ((current === v1 && next === v2) || (current === v2 && next === v1)) {
                    continue;
                }
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
        
        minDiff = Math.min(diff, minDiff);
    }
    return minDiff;
}