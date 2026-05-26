function solution(number) {
    var answer = 0;
    
    function dfs(index, count, sum) {
        if (count === 3) {
            if (sum === 0) answer++;
            return;
        }
        
        for (let i = index; i < number.length; i++) {
            dfs(i + 1, count + 1, sum + number[i]);
        }
    }
    
    
    dfs(0, 0, 0);
    
    return answer;
}