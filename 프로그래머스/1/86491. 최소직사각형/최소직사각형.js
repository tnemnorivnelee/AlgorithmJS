function solution(sizes) {
    let maxWidth = 0;
    let maxHeight = 0;
    
    sizes.forEach((card) => {
        const [w, h] = card;
        
        const longer = Math.max(w, h);
        const shorter = Math.min(w, h);
        
        maxWidth = Math.max(maxWidth, longer);
        maxHeight = Math.max(maxHeight, shorter);
        
        
    })
    
    
    return maxWidth * maxHeight;
}