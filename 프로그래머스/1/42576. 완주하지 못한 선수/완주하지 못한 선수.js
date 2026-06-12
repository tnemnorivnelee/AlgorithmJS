// 수많은 마라톤 선수들이 마라톤에 참여
// 단 한 명의 선수를 제외하고는 모든 선수가 마라톤 완주

// 마라톤에 참여한 선수들의 이름이 담긴 배열과 완주한 선수들의 이름이 담긴 배열이 주어짐
// 완주하지 못한 선수의 이름을 리턴

// 참가자 중에는 동명이인이 있을 수 있습니다. -> new Map 사용

function solution(participant, completion) {
    const nm = new Map();
    
    participant.forEach((v) => nm.set(v, nm.get(v) + 1 || 1));
    
    completion.forEach((v) => {
        if (nm.has(v)) {
            if (nm.get(v) === 1) {
                nm.delete(v); 
            } else {
                nm.set(v, nm.get(v) - 1);
            }
        }
    });
    return [...nm][0][0];
}