function solution(n, lost, reserve) {
    const students = new Array(n + 2).fill(1);

    // 잃어버린 학생
    for (let i = 0; i < lost.length; i++) {
        const studentNum = lost[i];
        students[studentNum]--;
    }
    
    // 여벌이 있는 학생
    for (let i = 0; i < reserve.length; i++) {
        const studentNum = reserve[i];
        students[studentNum]++;
    }
    
    // console.log(students);
    
    let answer = 0;
    
    for (let i = 1; i <= n; i++) {
        
        if (students[i] === 0) {
            if (students[i - 1] === 2) {
                students[i]++;
                students[i - 1]--;
            } else if (students[i + 1] === 2) {
                students[i]++
                students[i + 1]--;
            }
        }
    }
    
    // console.log(students);
    
    for (let i = 1; i <= n; i++) {
        if (students[i] >= 1) answer++;
    }
    
    return answer;
}