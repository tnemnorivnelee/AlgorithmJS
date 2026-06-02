// 셀수있는 수량의 순서있는 열거 또는 어떤 순서를 따르는 요소들의 모음을 튜플이라고 한다.
// n 개의 요소를 가진 유틀을 n-튜플이라고 하며, 다음과 같이 표현한다
// (a1, a2 ... an);

// 튜플은 다음과 같은 성질을 가지고 있다
// 1. 중복된 원소가 있을 수 있다
// 2. 원소에 정해진 순서가 있다. 원소의 순서가 다르면 서로 다른 튜플이다.
// 3. 튜플 원소 개수는 유한하다.

// 원소의 개수가 n개이고, 중복되는 원소가 없는 튜플이 주어질 때
// 

function solution(s) {
    const answer = [];
    const tupleArr = s.substr(2, s.length - 4).split("},{").sort((a, b) => a.length - b.length);
    
    console.log(tupleArr);
    
    for (let i = 0; i < tupleArr.length; i++) {
        const element = tupleArr[i].split(",");
        
        for (let j = 0; j < element.length; j++) {
            // console.log(element[j]);
            if (!answer.includes(element[j])) {
                answer.push(element[j]);
                break;
            }
        }        
    }
    return answer.map(Number);
}