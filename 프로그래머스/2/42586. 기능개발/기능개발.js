function solution(progresses, speeds) {
    
    const days = Array.from({length: progresses.length}).fill(0);
    
    for (let i = 0; i < progresses.length; i++) {
        days[i] = Math.ceil((100 - progresses[i]) / speeds[i]);
    }
    
    // console.log(days);
    
    let maxDays = days[0];
    let count = 1;
    
    const answer = [];
    
    for (let i = 1; i < days.length; i++) {
        if (maxDays < days[i]) {
            answer.push(count);
            count = 1;
            maxDays = days[i];
        } else {
            count++;
        }
    }
    
    answer.push(count);
    
    // console.log(answer);
    
    return answer;
}