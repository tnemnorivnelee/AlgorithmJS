function solution(survey, choices) {
    const typeNumbers = ["RT", "CF", "JM", "AN"];
    
    const type = new Map();

    for (const question of survey) {
        const [type1, type2] = question.split("");
        
        if (!type.has(type1) && !type.has(type2)) {
            type.set(type1, 0);
            type.set(type2, 0);    
        }
    }
    
    
    for (let i = 0; i < survey.length; i++) {
        const [type1, type2] = survey[i].split("");
        const choice = choices[i];
        
        if (1 <= choice && choice <= 3) {
            type.set(type1, type.get(type1) + 4 - choice);
        } else if (choice === 4) {
            continue;
        } else if (5 <= choice && choice <= 7) {
            type.set(type2, type.get(type2) - 4 + choice);
        }
    }
    
    
    let answer = "";
    
    for (let i = 0; i < 4; i++) {
       const [type1, type2] = typeNumbers[i].split("");
       
       const type1Score = type.get(type1);
       const type2Score = type.get(type2);
       
       if (type1Score > type2Score) {
           answer += type1;
       } else if (type1Score < type2Score) {
           answer += type2;
       } else {
            const temp = [type1, type2].sort((a, b) => a.localeCompare(b));
            answer += temp[0];
       }
    }
    
    return answer;
}