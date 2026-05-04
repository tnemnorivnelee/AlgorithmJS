function solution(people, limit) {
    var answer = 0;
    
    people.sort((a,b) => b - a);
    
    console.log(people);
    
    let leftIdx = 0;
    let rightIdx = people.length - 1;
    
    while (leftIdx <= rightIdx) {
        if (people[leftIdx] + people[rightIdx] > limit) {
            leftIdx++;
        } else if (people[leftIdx] + people[rightIdx] <= limit) {
            leftIdx++;
            rightIdx--;
        }
        answer++;
    }
    
    
    return answer;
}