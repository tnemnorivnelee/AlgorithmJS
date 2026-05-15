function solution(progresses, speeds) {
    var answer = [];
    
    const days = Array.from({ length: progresses.length }).fill(0);
    
    for (let i = 0; i < progresses.length; i++) {
        days[i] = Math.ceil((100 - progresses[i]) / speeds[i]);
    }
    
    console.log(days);
    
    let maxDays = days[0];
    let count = 1;
    
    for (let i = 1; i < days.length; i++) {
        if (days[i] <= maxDays) {
            count++;
        } else {
            answer.push(count);
            count = 1;
            maxDays = days[i];
        }
    }
    
    answer.push(count);
    
    return answer;
}