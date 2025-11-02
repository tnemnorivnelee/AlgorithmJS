function solution(progresses, speeds) {
    var answer = [];
    let count = 0;
    
    const counts = Array.from({length: progresses.length}).fill(0);
    
    while (counts.some((item) => item === 0)) {
        for (let i = 0; i < progresses.length; i++) {
            if (progresses[i] >= 100 && counts[i] === 0) {
                counts[i] = count;
            }
            progresses[i] += speeds[i];
        }
        count++;
    }
    
    count = 1;
    
    let maxDay = counts[0];
    
    for (let i = 1; i < counts.length; i++) {
        if (maxDay >= counts[i]) {
            count++;
        } else {
            answer.push(count);
            maxDay = counts[i];
            count = 1;
        }
    }
    
    answer.push(count);
    
    
    return answer;
}