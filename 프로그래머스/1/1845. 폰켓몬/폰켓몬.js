function solution(nums) {
    const setNums = new Set(nums);
    
    const answer = Math.min(setNums.size, nums.length / 2);
    
    return answer;
}