function solution(bridge_length, weight, truck_weights) {
    var answer = 0;
    let arrivedTrucks = truck_weights.length;
    
    const truckInBridge = Array.from({length: bridge_length}).fill(0);
    
    while (arrivedTrucks > 0) {
        const exitingTruck = truckInBridge.shift();
        
        if (exitingTruck > 0) { 
            arrivedTrucks--;      
        }       
        
        const totalWeightInBridge = truckInBridge.reduce((acc, cur) => acc + cur, 0);
        
        if (truck_weights.length > 0 && totalWeightInBridge + truck_weights[0] <= weight) {
            const getFirstWaiting = truck_weights.shift();
            truckInBridge.push(getFirstWaiting);
        } else {
            truckInBridge.push(0);
        }
        
        answer++;
        
    }
    
    
    return answer;
}
