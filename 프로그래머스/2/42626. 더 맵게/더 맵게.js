// 최소 힙(Min-Heap) 클래스 구현
class MinHeap {
  // 힙을 저장할 배열
  constructor() {
    this.heap = [];
  }

  // 힙이 비어있는지 확인
  isEmpty() {
    return this.heap.length === 0;
  }

  // 힙의 크기 반환
  size() {
    return this.heap.length;
  }

  // 두 요소의 위치를 교환하는 헬퍼 함수
  swap(idx1, idx2) {
    [this.heap[idx1], this.heap[idx2]] = [this.heap[idx2], this.heap[idx1]];
  }

  // 힙에 새로운 요소 추가 (삽입)
  push(value) {
    // 힙의 맨 마지막에 요소를 추가
    this.heap.push(value);
    // 힙 속성을 유지하기 위해 요소를 위로 올림 (heapifyUp)
    this.heapifyUp();
  }

  // 힙에서 최소값(루트)을 제거하고 반환 (삭제)
  pop() {
    // 힙이 비어있으면 null 반환
    if (this.isEmpty()) return null;
    // 힙에 요소가 하나뿐이면 그냥 반환
    if (this.heap.length === 1) {
      return this.heap.pop();
    }

    // 최소값(루트)을 저장
    const min = this.heap[0];
    // 힙의 마지막 요소를 루트로 이동
    this.heap[0] = this.heap.pop();
    // 힙 속성을 유지하기 위해 요소를 아래로 내림 (heapifyDown)
    this.heapifyDown();

    // 저장해둔 최소값 반환
    return min;
  }

  // 힙의 최소값을 확인 (제거하지 않음)
  peek() {
    return this.heap[0];
  }

  // '위로 올리기' : 자식 노드가 부모 노드보다 작을 경우 위치를 바꿈
  heapifyUp() {
    let index = this.heap.length - 1; // 현재 요소(마지막에 추가된 요소)의 인덱스
    // 부모 인덱스 계산 (루트에 도달할 때까지)
    while (index > 0) {
      const parentIndex = Math.floor((index - 1) / 2);

      // 부모가 자식보다 작거나 같으면 힙 속성 만족
      if (this.heap[parentIndex] <= this.heap[index]) {
        break;
      }
      
      // 부모가 자식보다 크면 위치 교환
      this.swap(index, parentIndex);
      // 인덱스를 부모 인덱스로 변경하여 계속 비교
      index = parentIndex;
    }
  }

  // '아래로 내리기' : 부모 노드가 자식 노드보다 클 경우 위치를 바꿈
  heapifyDown() {
    let index = 0; // 루트에서 시작
    const heapSize = this.heap.length;

    while (true) {
      let leftChildIndex = 2 * index + 1; // 왼쪽 자식 인덱스
      let rightChildIndex = 2 * index + 2; // 오른쪽 자식 인덱스
      let smallestIndex = index; // 가장 작은 값을 가진 노드의 인덱스 (일단 부모로 설정)

      // 왼쪽 자식이 존재하고, 부모보다 작으면
      if (leftChildIndex < heapSize && this.heap[leftChildIndex] < this.heap[smallestIndex]) {
        smallestIndex = leftChildIndex;
      }

      // 오른쪽 자식이 존재하고, (왼쪽 자식보다도) 더 작으면
      if (rightChildIndex < heapSize && this.heap[rightChildIndex] < this.heap[smallestIndex]) {
        smallestIndex = rightChildIndex;
      }

      // 부모가 자식들보다 작아서 위치가 바뀌지 않으면 종료
      if (smallestIndex === index) {
        break;
      }

      // 부모와 더 작은 자식의 위치 교환
      this.swap(index, smallestIndex);
      // 인덱스를 자식 인덱스로 변경하여 계속 비교
      index = smallestIndex;
    }
  }
}

function solution(scoville, K) {
    const minHeap = new MinHeap();
    
    for (const s of scoville) {
        minHeap.push(s);
    }
    
    let mixCount = 0;
    
    while (minHeap.size() >= 2 && minHeap.peek() < K) {
        mixCount++;
        
        const firstMin = minHeap.pop();
        const secondMin = minHeap.pop();
        
        const newScoville = firstMin + (secondMin * 2);
        
        minHeap.push(newScoville);
    }
    
    return minHeap.peek() >= K ? mixCount : -1;
}