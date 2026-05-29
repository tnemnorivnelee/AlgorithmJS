// 게임 대회에 N 명이 참가, 토너먼트 형식으로 진행
// 4명의 경우에 1,2번 / 3,4 번으로 진행
// 1번 승리, 4번 승리 후에 다시 번호 재배정 (1번, 2번으로)
// 


function solution(n,a,b)
{
    let count = 0;
    
    while (a !== b) {
        a = Math.ceil(a / 2);
        b = Math.ceil(b / 2);
        count++;
    }

    return count;
}