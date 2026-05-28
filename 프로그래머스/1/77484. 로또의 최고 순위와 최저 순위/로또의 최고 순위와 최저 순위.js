// 로또는 1부터 45까지의 숫자 중에 6개를 찍어서 맞히는 복권
// 민우는 발표일을 기다리는데, 민우동생이 로또에 낙서를 하여, 일부 번호를 알아볼 수 없음

// 민우는 자신이 구매한 로또의 예상 당첨최고순위, 예상 당첨최저순위를 알아보고 싶음

// 알아볼 수 없는 번호를 0 으로 표기

function solution(lottos, win_nums) {
    const rank = [6, 6, 5, 4, 3, 2, 1];
    
    const zeroCount = lottos.filter((v) => v === 0).length;
    const lowCount = lottos.filter((v) => win_nums.includes(v)).length;

    return [rank[zeroCount + lowCount], rank[lowCount]];
}

// function solution(lottos, win_nums) {
    
//     if (lottos.every((v) => v === 0)) return [1, 6];
    
//     let lowCount = 0;
    
//     for (let i = 0; i < lottos.length; i++) {
//         if (win_nums.includes(lottos[i])) lowCount++;    
//     }
    
//     const zeroCount = lottos.filter((v) => v === 0).length;
//     const highCount = lowCount + zeroCount;
    
//     switch(highCount) {
//         case 6: return [1, 1 + zeroCount];
//         case 5: return [2, 2 + zeroCount];
//         case 4: return [3, 3 + zeroCount];
//         case 3: return [4, 4 + zeroCount];
//         case 2: return [5, 5 + zeroCount];
//         default: return [6, 6];
//     }
    
//     console.log(lowCount);
//     console.log(zeroCount);
// }