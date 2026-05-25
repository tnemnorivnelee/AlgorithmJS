function solution(a, b) {
    const ab = String(a) + b;
    const ba = String(b) + a;
    
    return ab >= ba ? Number(ab) : Number(ba);
}