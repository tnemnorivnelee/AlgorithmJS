// 스트리밍 사이트에서 장르 별로 가장 많이 재생된 노래를 두 개씩 모아 베스트 앨범을 출시하려 합니다
// 노래는 고유 번호로 구분하며, 노래를 수록하는 기준은 아래와 같다

// 1. 속한 노래가 많이 재생된 장르를 먼저 수록
// 2. 장르 내에서 많이 재생된 노래를 먼저 수록
// 3. 장르 내에서 재생 횟수가 같은 노래 중에서는 고유 번호가 낮은 노래를 먼저 수록

// 노래의 장르를 나타내는 문자열 배열과 노래별 재생 횟수를 나타내는 정수 배열이 주어질 때
// 베스트 앨범에 들어갈 노래의 고유 번호를 순서대로 return

function solution(genres, plays) {
    const answer = [];
    
    const nm = new Map();
    
    for (let i = 0; i < genres.length; i++) {
        const g = genres[i];
        const p = plays[i];
        
        if (!nm.has(g)) nm.set(g, { total: 0, list: [] });
        
        const data = nm.get(g);
        
        data.total += p;
        data.list.push({ i: i, play: p });
    }
    
    const sortedMap = new Map([...nm].sort((a,b) => {
        const [aI, aValue] = a;
        const [bI, bValue] = b;
        
        return bValue.total - aValue.total;
    }));
    
    console.log(sortedMap);
    
    for (const [key, value] of sortedMap) {
        const { list } = value;
        const sortedByPlay = list.sort((a, b) => {
            if (a.play !== b.play) return b.play - a.play;
            return a.i - b.i;
        });
        
        answer.push(sortedByPlay[0].i);
        
        if (sortedByPlay.length >= 2) answer.push(sortedByPlay[1].i);
    }
    return answer;
}