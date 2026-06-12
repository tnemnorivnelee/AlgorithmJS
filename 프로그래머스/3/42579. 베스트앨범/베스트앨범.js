function solution(genres, plays) {
    const answer = [];
    
    const nm = new Map();
    
    for (let i = 0; i < genres.length; i++) {
        const g = genres[i];
        const p = plays[i];
        
        if (!nm.has(g)) nm.set(g, { total: 0, list: [] });
        
        const data = nm.get(g);
        
        data.total += p;
        data.list.push({ id: i, play: plays[i] });
    }
    
    const sortedBytotal = new Map([...nm].sort((a,b) => {
        const aTotal = a[1].total;
        const bTotal = b[1].total;
        return bTotal - aTotal;
    }));
    
    // console.log(sortedBytotal);
    
    for (const value of sortedBytotal.values()) {
        const { list } = value;
        
        const sortedByPlay = list.sort((a,b) => {
            if (a.play !== b.play) return b.play - a.play;
            return a.id - b.id;
        });
        
        answer.push(sortedByPlay[0].id);
        
        if (sortedByPlay.length >= 2) answer.push(sortedByPlay[1].id);
    }
    return answer;
}