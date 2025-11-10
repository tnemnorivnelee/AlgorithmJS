function solution(numbers, target) {
    var answer = 0;
    
    function dfs(index, currentSum) {
        if (index === numbers.length) {
            if (target === currentSum) {
                answer++;
            }
           return;
        }
        
        dfs(index + 1, currentSum + numbers[index]);
        dfs(index + 1, currentSum - numbers[index]);
    }
    
    dfs(0, 0);
    
    return answer;
}