function solution(prices) {
    const n = prices.length; // prices 배열의 길이를 n이라는 변수에 담아둡니다.
    
    // 일단 모든 주식이 끝까지 떨어지지 않았다고 가정하고 정답 배열을 미리 세팅합니다.
    const answer = new Array(n).fill(0);
    
    // 아직 가격이 떨어지지 않은 주식들의 '시간(인덱스)'을 담아둘 빈 스택입니다.
    const stack = [];
    
    // 시간(초)이 0초부터 끝까지 흐릅니다. (i는 현재 시간)
    for (let i = 0; i < n; i++) {
        // 스택에 보관된 과거의 주식이 있고 && 과거의 주식 가격이 현재 주식 가격보다 비싸다면?
        // 즉, 스택에 남아있던 과거 주식의 가격이 지금 막 떨어졌음을 의미합니다!
        while (stack.length > 0 && prices[stack[stack.length - 1]] > prices[i]) {
            // 가격이 떨어진 과거 주식의 시간(인덱스)을 스택에서 꺼냅니다.
            const pastTime = stack.pop();
            
            // 과거 주식이 가격을 유지한 시간 = 현재 시간(i) - 과거 주식을 샀던 시간(pastTime)
            answer[pastTime] = i - pastTime;
        }
        
        // 현재 시간(인덱스)도 아직 가격이 떨어지지 않았으므로 스택에 보관합니다.
        stack.push(i);
    }
    
    // 반복문이 다 끝났는데도 스택에 남아있는 시간(인덱스)들이 있습니다.
    // 얘네들은 주식 시장이 끝날 때까지 한 번도 가격이 떨어지지 않은 최고 효자 종목들입니다!
    while (stack.length > 0) {
        const pastTime = stack.pop(); // 꺼냅니다.
        // 전체 시간(n - 1)에서 자신이 들어간 시간(pastTime)을 빼면 유지된 시간이 나옵니다.
        answer[pastTime] = n - 1 - pastTime;
    }
    
    return answer;
}