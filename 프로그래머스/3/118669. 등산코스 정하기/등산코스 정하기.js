// 프로그래머스 등산코드 정하기

// 어떤 산은 n개의 지점으로 이루어져 있다.
// 각 지점은 1부터 n까지 번호가 붙어있으며, 출입구, 쉼터, 혹은 산봉우리이다.
// 각 지점은 양방향 통행이 가능한 등산로로 연결되어 있으며, 서로 다른 지점을 이동할 때 이 등산로를 이용해야 한다.
// 이때, 등산로별로 이동하는데 일정 시간이 소요된다.

// 등산코스는 방문할 지점 번호들을 순서대로 나열하여 표현할 수 있다.
// 예를 들어 1-2-3-2-1 으로 표현하는 등산코스는 1번지점에서 출발하여 2번,3번,2번,1번 지점을 순서대로 방문한다는 뜻이다.
// 등산코스를 따라 이동하는 중 쉼터 혹은 산봉우리를 방문할 때마다 휴식을 취할 수 있으며
// 휴식 없이 이동해야 하는 시간 중 가장 긴 시간을 해당 등산코드의 intensity 라고 부르기로 한다.

// 당신은 어떤 산의 출입구 중 한 곳에서 출발하여 산봉우리 중 한 곳만 방문한 뒤
// 다시 원래의 출입구로 돌아오는 등산코스를 정하려고 한다.
// 다시 말해, 등산코스에서 출입구는 처음과 끝에 한 번씩, 산봉우리는 한 번만 포함되여야 한다.
// 당신은 이러한 규칙을 지키면서 intensity 가 최소가 되도록 등산코스를 정하려고 한다.

// 다음은 어떤 산의 지점과 등산로를 그림으로 표현한 예시이다.

// ...

// 어떤 산의 지점 수 n
// 각 등산로의 정보를 담은 2차원 정수 배열 paths
// 출입구들의 번호가 담긴 정수 배열 gates
// 산봉우리들의 번호가 담긴 정수 배열 summits
// 이때, intensity 가 최소가 되는 등산코스에 포함된 산봉우리 번호와
// intensity 의 최솟값을 차례대로 정수 배열에 담아 반환하는 함수를 완성하라.
// intensity 가 최소가 되는 등산코스가 여러 개라면 그중 산봉우리의 번호가 가장 낮은 등산코스를 선택하라.


class MinHeap {
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
            let leftChildIdx = 2 * idx + 1;
            let rightChildIdx = 2 * idx + 2;
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
    // 1. 그래프 구성 및 노드 타입 분류
    const graph = Array.from({ length: n + 1 }, () => []);
    const isSummit = new Set(summits);
    const isGate = new Set(gates);

    // 단방향 간선으로 치환하여 탐색 가지치기
    for (const [i, j, w] of paths) {
        // 출입구에서 나가거나 산봉우리로 들어가는 간선만 추가 (단방향 처리)
        if (isGate.has(i) || isSummit.has(j)) {
            graph[i].push([j, w]);
        } else if (isGate.has(j) || isSummit.has(i)) {
            graph[j].push([i, w]);
        } else {
            // 일반 쉼터끼리는 양방향 추가
            graph[i].push([j, w]);
            graph[j].push([i, w]);
        }
    }

    // 2. 다익스트라 초기화
    // 모든 출입구를 힙에 동시에 넣고 시작 (다중 출발점)
    const pq = new MinHeap();
    const intensities = Array(n + 1).fill(Infinity);

    for (const gate of gates) {
        pq.push([gate, 0]);
        intensities[gate] = 0; // 출입구의 초기 intensity는 0
    }

    // 3. 다익스트라 수행
    while (!pq.isEmpty()) {
        const [node, currentIntensity] = pq.pop();

        // 산봉우리에 도달했다면 더 이상 탐색하지 않음 (휴식 후 하산은 왔던 길을 돌아가면 됨)
        if (isSummit.has(node)) continue;
        
        // 현재 꺼낸 경로의 최대 가중치가 이미 기록된 가중치보다 크면 스킵 (최적화)
        if (currentIntensity > intensities[node]) continue;

        for (const [nextNode, weight] of graph[node]) {
            // 핵심 로직: 현재까지의 가장 큰 가중치(currentIntensity)와 다음 간선의 가중치(weight) 중 최댓값이 새로운 경로의 intensity
            const nextIntensity = Math.max(currentIntensity, weight);

            // 새로운 intensity가 기존에 기록된 nextNode의 intensity보다 작을 때만 갱신 및 큐에 삽입
            if (nextIntensity < intensities[nextNode]) {
                intensities[nextNode] = nextIntensity;
                pq.push([nextNode, nextIntensity]);
            }
        }
    }

    // 4. 결과 도출 (조건에 맞는 산봉우리 찾기)
    let minIntensity = Infinity;
    let minSummit = Infinity;

    // 산봉우리 번호를 오름차순으로 정렬 (intensity가 같을 경우 번호가 작은 것을 반환해야 하므로)
    summits.sort((a, b) => a - b);

    for (const summit of summits) {
        if (intensities[summit] < minIntensity) {
            minIntensity = intensities[summit];
            minSummit = summit;
        }
    }

    return [minSummit, minIntensity];
}