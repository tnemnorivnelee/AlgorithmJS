function solution(progresses, speeds) {
    // 각 기능은 진도 100% 일 때 서비스에 반영 가능.
    // 뒤에 있는 기능이 앞에 있는 기능보다 먼저 개발될 수 있음.
    // 이때 뒤에 있는 기능은 앞에 있는 기능이 배포될 때 함께 배포됨.
    
    const queue = Array.from({length: progresses.length }).fill(0);
    
    for (let i = 0; i < queue.length; i++) {
        queue[i] = Math.ceil((100 - progresses[i]) / speeds[i]);
    }
    
    let answer = [];
    let maxDay = queue[0];
    let count = 1;
    
    for (let i = 1; i < queue.length; i++) {
        if (queue[i] <= maxDay) {
            count++;
        } else {
            answer.push(count);
            maxDay = queue[i];
            count = 1;
        }
    }
    answer.push(count);
    
    return answer;
}