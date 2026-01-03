function solution(s) {
    // 첫 문자는 대문자, 나머지 문자는 전부 소문자 처리
    // 공백 문자가 연속으로 나올 수 있음
    
    const words = s.split(" ");
    
    // console.log(words);
    
    const jcString = words.map((value, index) => {
        if (value === "") return;
        
        const upper = value[0].toUpperCase();
        const lower = value.substring(1).toLowerCase();
        
        return upper + lower;
    });
    
    // console.log(jcString);
    
    return jcString.join(" ");
    
    
    
}