function solution(n, lost, reserve) {
    const students = new Array(n + 2).fill(1);
    
    for (let i = 0; i < lost.length; i++) {
        let studentNum = lost[i];
        students[studentNum]--;
    }
    
    for (let i = 0; i < reserve.length; i++) {
        let studentNum = reserve[i];
        students[studentNum]++;
    }
    
    let answer = 0;
    
    for (let i = 1; i <= n; i++) {
        
        if (students[i] === 0) {
            if (students[i - 1] === 2) {
                students[i - 1]--;
                students[i]++;
            } else if (students[i + 1] === 2) {
                students[i + 1]--;
                students[i]++;
            }
        }
    }
    
    for (let i = 1; i <= n; i++) {
        if (students[i] >= 1) answer++;
    }
    
    return answer;
}