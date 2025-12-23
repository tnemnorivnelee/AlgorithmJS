function solution(participant, completion) {
    const mapParticipant = new Map();
    
    for (let i = 0; i < participant.length; i++) {
        const a = participant[i];
        const b = completion[i];
        
        mapParticipant.set(a, (mapParticipant.get(a) || 0) + 1);
        mapParticipant.set(b, (mapParticipant.get(b) || 0) - 1);
    }

    
    for (const [key, value] of mapParticipant) {
        if (value) return key;
    }
}