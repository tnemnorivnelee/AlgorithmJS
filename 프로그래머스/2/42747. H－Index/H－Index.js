// HINDEX 는 과학자의 생산성과 영향력을 나타내는 지표
// 어느 과학자의 HINDEX 를 나타내는 값인 h 를 구하려 한다

// 어떤 과학자가 발표한 논문 n 편 중, h 번 이상 인용된 논문이 h 편 이상이고
// 나머지 논문이 h 번 이하 인용되었다면 h 의 최댓값이 이 과학자의 HINDEX 이다

function solution(citations) {
    var answer = 0;
    
    citations.sort((a,b) => b - a);
    
    console.log(citations);
    
    for (let i = 0; i < citations.length; i++) {
        if (i + 1 <= citations[i]) answer = i + 1;
    }
    return answer;
}