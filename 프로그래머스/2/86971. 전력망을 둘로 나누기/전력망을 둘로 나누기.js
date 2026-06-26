function solution(n, wires) {
    // 1. 최소 값을 구하기 위해 초기값을 안전한 최대 정수값으로 설정
    // (주의: 값이 계속 갱신되어야 하므로 const가 아닌 let을 사용해야 합니다!)
    let minDiff = Number.MAX_SAFE_INTEGER;
    
    // 2. 송전탑들이 어떻게 연결되어 있는지(인접 리스트)를 추적하는 공간 설정
    const graph = new Map();
    
    // 3. 전선 정보를 바탕으로 양방향 연결 상태를 맵(graph)에 설정하는 반복문
    for (const [a, b] of wires) {
        if (!graph.has(a)) graph.set(a, []);
        if (!graph.has(b)) graph.set(b, []);
        
        graph.get(a).push(b);
        graph.get(b).push(a);
    }
    
    // 4. 모든 전선을 하나씩 '가상으로' 끊어보기 위한 반복문
    // (이번 차례에 끊어볼 전선의 양 끝점을 a와 b라고 합니다)
    for (const [a, b] of wires) {
        
        // 5. BFS 탐색을 위한 대기열(Queue) 설정
        // 한쪽 전력망의 덩치를 재기 위해, 끊어진 전선의 한쪽 끝인 'a'부터 탐색을 시작합니다.
        const queue = [a];
        
        // 6. 무한 루프를 방지하기 위해 방문한 송전탑을 기록하는 공간 설정
        const visited = new Map();
        visited.set(a, true); // 시작점 'a'는 이미 방문했다고 도장 꾹!
        
        // 7. 'a'와 연결된 한쪽 전력망의 송전탑 개수를 세기 위한 변수
        let count = 0;
        
        // 8. 대기열(Queue)에 방문할 송전탑이 남아있는 동안 계속 탐색(BFS) 진행
        while (queue.length > 0) {
            // 9. 대기열에서 가장 오래 기다린(맨 앞의) 송전탑을 꺼내 현재 위치로 설정
            const current = queue.shift();
            // 송전탑을 하나 꺼낼 때마다 우리가 묶어둔 전력망의 크기가 1씩 커집니다.
            count++;
            
            // 10. 현재 위치한 송전탑(current)과 전선으로 이어진 다음 송전탑(next)들을 확인
            for (const next of graph.get(current)) {
                
                // 11. [핵심 로직] 만약 지금 지나가려는 전선이 우리가 4번에서 '끊기로 한 전선(a-b)'이라면?
                // 건너가지 않고 무시합니다! (이 코드가 전선을 가상으로 끊는 역할을 합니다)
                if (((current === a) && (next === b)) || ((current === b) && (next === a))) {
                    continue; 
                }
            
                // 12. 끊어진 전선도 아니고, 아직 방문하지 않은 새로운 송전탑이라면?
                if (!visited.get(next)) {
                    visited.set(next, true); // 방문했다고 도장 찍고
                    queue.push(next);        // 대기열의 맨 뒤에 줄을 세웁니다.
                }
            }
        }
        
        // 13. while문이 끝났다는 것은 한쪽 전력망(a쪽)의 크기를 다 쟀다는 뜻입니다. (크기는 count)
        // 전체 송전탑이 n개이므로, 다른 한쪽(b쪽) 전력망의 크기는 자연스럽게 (n - count)가 됩니다.
        // 두 전력망의 차이를 절댓값(Math.abs)으로 구합니다.
        const diff = Math.abs(count - (n - count));
        
        // 14. 지금까지 찾은 차이(minDiff)와 방금 찾은 차이(diff)를 비교해 더 작은 값으로 업데이트!
        minDiff = Math.min(minDiff, diff);
    }
    
    // 15. 모든 전선을 다 끊어보고 나서 얻어낸 "가장 작은 차이값"을 반환
    return minDiff;
}