function solution(participant, completion) {
    const mapParticipant = new Map();
    
    for (let i = 0; i < participant.length; i++) {
        if (mapParticipant.has(participant[i])) {
            mapParticipant.set(participant[i], mapParticipant.get(participant[i]) + 1);    
        } else {
            mapParticipant.set(participant[i], 1);
        }
    }
    
    for (let i = 0; i < completion.length; i++) {
        if (mapParticipant.has(completion[i])) {
            mapParticipant.set(completion[i], mapParticipant.get(completion[i]) - 1);
        }
    }
    
    for (const [key, value] of mapParticipant) {
        if (value) return key;
    }
}