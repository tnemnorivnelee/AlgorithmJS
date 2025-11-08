function solution(N, stages) {
    // 실패율 = 스테이지에 도달했으나 아직 클리어하지 못한 플레이어 수 / 스테이지에 도달한 플레이어 수
    
    // N = 전체 스테이지의 개수
    // stages = 사용자가 현재 멈춰있는 스테이지의 번호가 담긴 배열
    // stages 의 각 자연수는 사용자가 현재 도전 중인 스테이지의 번호를 나타낸다.
    // 단, N + 1 은 마지막 스테이지까지 클리어 한 사용자를 나타낸다.
    
    // 실패율이 높은 스테이지부터 내림차순으로 스테이지 번호가 담겨있는 배열을 구하라.
    // 단, 스테이지에 도달한 유저가 없는 경우 해당 스테이지의 실패율은 0 으로 정의한다.
    
    // 1. 각 스테이지 별 도전자 수를 구한다.
    const challenger = new Array(N + 2).fill(0);
    
    for (const stage of stages) {
        challenger[stage] += 1;
    }
    
    // 2. 실패율을 저장하는 공간 생성
    const fails = {};
    let total = stages.length;
    
    // 3. 순회하면서 각 스테이지 별 실패율 계산
    for (let i = 1; i <= N; i++) {
        // 3-1. 스테이지에 도달한 유저가 없는 경우 실패율 0
        if (challenger[i] === 0) {
            fails[i] = 0;
        }
        
        // 3-2. 실패율 계산
        fails[i] = challenger[i] / total;
        
        //3-3. 앞 스테이지 인원 수 제거
        total -= challenger[i];
    }
    
    const result = Object.entries(fails).sort((a, b) => b[1] - a[1]);
    const answer = result.map((item) => Number(item[0]));
    
    return answer;
}