const converter = (str) => {
    const nm = new Map();
    
    for (let i = 0; i < str.length - 1; i++) {
        const element = str.slice(i, i + 2).toUpperCase();
        
        if (/^[A-Z]{2}$/.test(element)) {
            nm.set(element, nm.get(element) + 1 || 1);
        }
    }
    return nm;
}

function solution(str1, str2) {
    var answer = 0;
    
    const str1Map = converter(str1);
    const str2Map = converter(str2);
    
    if (str1Map.size === 0 && str2Map.size === 0) return 65536;
    
    const elements = new Set([...str1Map.keys(), ...str2Map.keys()]);
    
    let intersection = 0;
    let union = 0;
    
    for (const element of elements) {
        const str1Count = str1Map.get(element) || 0;
        const str2Count = str2Map.get(element) || 0;
        
        intersection += Math.min(str1Count, str2Count);
        union += Math.max(str1Count, str2Count);
    }
    
    return Math.floor(intersection / union * 65536);
}