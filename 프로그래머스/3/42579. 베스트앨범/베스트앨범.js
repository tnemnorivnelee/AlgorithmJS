function solution(genres, plays) {
    var answer = [];
    
    // 1. Map 형태로 정리
    const nm = new Map();
    
    for (let i = 0; i < genres.length; i++) {
        const g = genres[i];
        const p = plays[i];

        if (!nm.has(g)) {
            nm.set(g, { total: 0, list: [] });
        }
        
        const data = nm.get(g);
        data.total += p;
        data.list.push({ id : i, play: p });
    }

    const sortedMap = new Map([...nm].sort((a,b) => {
        const [aKey, aValue] = a;
        const [bKey, bValue] = b;
        return bValue.total - aValue.total;
    }));
    
    for (const [key, value] of sortedMap) {
        const {list} = value;
        const sortedByPlay = list.sort((a,b) => {
            if (a.play !== b.play) return b.play - a.play;
            return a.id - b.id;
        });
        
       answer.push(sortedByPlay[0].id);
        
        if (sortedByPlay.length >= 2) {
            answer.push(sortedByPlay[1].id);
        }
    }
    
    return answer;
}