function solution(n, lost, reserve) {
    let answer = 0;
    
    const students = Array.from({ length: n + 1 }).fill(1);
    
    for (let i = 1; i <= n; i++) {
        if (lost.includes(i)) students[i]--;
        if (reserve.includes(i)) students[i]++;
    }
    
 
    for (let i = 1; i <= n; i++) {
        if (students[i] === 0) {
            if (students[i - 1] === 2) {
                students[i]++;
                students[i - 1]--;
                continue;
            } else if (students[i + 1] === 2) {
                students[i]++;
                students[i + 1]--;
                continue;
            }
        }
    }
    
    for (let i = 1; i <= n; i++) {
        if (students[i]) answer++;
    }
    
    return answer;
}