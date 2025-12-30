function solution(s) {
    const words = s.split(" ");
    
    for (let i = 0; i < words.length; i++) {
        if (words[i] === "" ) continue;
        
        words[i] = words[i][0].toUpperCase() + words[i].substring(1).toLowerCase();
    }
    
    return words.join(" ");
}