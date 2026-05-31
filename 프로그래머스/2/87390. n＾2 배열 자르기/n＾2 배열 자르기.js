function solution(n, left, right) {
    // 결과를 담을 빈 배열을 생성합니다.
    const result = [];
    
    // left부터 right까지만 반복문을 실행합니다. (전체 범위를 돌지 않습니다!)
    for (let i = left; i <= right; i++) {
        
        // 현재 인덱스(i)가 2차원 배열에서 몇 번째 행(row)인지 계산합니다.
        const row = Math.floor(i / n);
        
        // 현재 인덱스(i)가 2차원 배열에서 몇 번째 열(col)인지 계산합니다.
        const col = i % n;
        
        // 행과 열 중 더 큰 값에 1을 더하여 결과 배열의 끝에 추가합니다.
        result.push(Math.max(row, col) + 1);
    }
    
    // 최종 완성된 배열을 반환합니다.
    return result;
}