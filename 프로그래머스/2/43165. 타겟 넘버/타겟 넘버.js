// bfs, 너비 우선 탐색
// 1. Queue 자료구조
// 2. 방문 처리, 큐에 노드를 넣을 때 바로 방문 처리 진행
// 3. 종료 조건

// 프로그래머스 타겟 넘버
// n개의 음이 아닌 정수들 존재
// 순서를 바꾸지 않고 적절히 더하거나 빼서 타겟 넘버를 만들려고 한다.

// 최소값이라는 내용은 없으니 bfs, dfs 둘 다 가능
// 주어지는 숫자의 개수 2~20개 이하 -> 완전 탐색 방식 가능

function solution(numbers, target) {
    let queue = [0];
    
    for (let num of numbers) {
        const nextLeaves = [];
        
        for (let q of queue) {
            nextLeaves.push(q + num);
            nextLeaves.push(q - num);
        }
        queue = nextLeaves;
    }
    
    return queue.filter((v) => v === target).length;
}