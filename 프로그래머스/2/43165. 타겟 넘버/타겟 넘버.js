function getAllCasesByBfs(numbers) {
    let leaves = [0];

    for (let num of numbers) {
        const nextLeaves = [];

        for (let leaf of leaves) {
            nextLeaves.push(leaf + num);
            nextLeaves.push(leaf - num);
        }
        
        leaves = nextLeaves;
    }
    return leaves;
}

// 프로그래머스에서 실행을 시작하는 메인 함수입니다.
function solution(numbers, target) {
    const allCases = getAllCasesByBfs(numbers);
    
    const answer = allCases.filter(leaf => leaf === target).length;
    
    return answer;
}