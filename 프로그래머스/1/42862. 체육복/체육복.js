function solution(n, lost, reserve) {
    let answer = 0;
    
    const students = Array.from({length: n}).fill(1);
    
    for (let i = 0; i < n; i++) {
        if (lost.includes(i + 1)) students[i]--;
        if (reserve.includes(i + 1)) students[i]++;
    }
    
 
    for (let i = 0; i < n; i++) {
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
    
    students.forEach((value) => {
        if (value) answer++;
    })
    
    return answer;
}