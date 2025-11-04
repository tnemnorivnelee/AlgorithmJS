function solution(bridge_length, weight, truck_weights) {
    var answer = 0;
    
    const destination = [];
    const trucksInBridge = Array.from({length: bridge_length}).fill(0);
    let truckCount = truck_weights.length;
    
    while (destination.length !== truckCount) {
        const getFirstTruckInBridge = trucksInBridge.shift();
        
        if (getFirstTruckInBridge) {
            destination.push(getFirstTruckInBridge);
        }
        
        const totalWeightInBridge = trucksInBridge.reduce((acc, cur) => acc + cur, 0);
        
        if (totalWeightInBridge +  truck_weights[0] <= weight) {
            trucksInBridge.push(truck_weights.shift());
        } else {
            trucksInBridge.push(0);
        }
        
     answer++;
    }
    
    return answer;
}