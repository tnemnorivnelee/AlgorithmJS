// 레오는 카펫을 사러 갔다가 그림과 같이 중앙에는 노란색으로 칠해져 있고
// 테두리는 갈색으로 칠해져 있는 격자 모양 카펫을 봤다.

// 레오는 집으로 돌아와서 아까 본 카펫의 노란색과 갈색으로 색칠된 격자의 개수는 기억했지만
// 전체 카펫의 크기는 기억하지 못했다.

// 레오가 본 카펫에서 갈색과 노란색 격자의 수가 매개변수로 주어질 때 
// 카펫의 가로, 세로 크기를 순서대로 배열에 담아 리턴하도록 함수를 완성하라

// 가로 >= 세로
// 가로 * 세로 = brown + yellow
// 

function solution(brown, yellow) {
    var answer = [];
    
    for (let i = 1; i <= Math.sqrt(yellow); i++) {
        const w = yellow / i + 2;
        const h = i + 2;
        
        if (w >= h && w * h === brown + yellow) {
            answer.push(w);
            answer.push(h);
        }
    }
    return answer;
}