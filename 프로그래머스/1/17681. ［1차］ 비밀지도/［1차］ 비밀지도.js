// 지도는 한 변의 길이가 n인 정사각형 배열
// 각 칸은 공백(" ") 혹은 벽("#") 두 종류로 구성
// 전체 지도는 두 장의 지도를 겹쳐서 얻을 수 있음

// 지도1 또는 지도2 중 어느 하나라도 벽인 부분은 전체 지도에서 벽
// 지도1 그리고 지도2에서 모두 공백이면 전체 지도에서 공백
// 지도1 그리고 지도2는 각각 정수 배열로 암호화

// 암호화된 배열은 지도의 각 가로줄에서 벽을 1, 공백을 0 으로 부호화했을 때 얻어지는 이진수에 해당하는 값의 배열


function solution(n, arr1, arr2) {
    var answer = [];
    
    const map1 = arr1.reduce((acc, cur) => [...acc, cur.toString(2).padStart(n, "0")], []);
    const map2 = arr2.reduce((acc, cur) => [...acc, cur.toString(2).padStart(n, "0")], []);
    const totalMap = [];
    
    for (let i = 0; i < n; i++) {
        let row = "";
        
        for (let j = 0; j < n; j++) {
            if (map1[i][j] === "0" && map2[i][j] === "0") {
                row += "1";
            } else {
                row += "0";
            }
        }
        totalMap.push(row);
    }
    
    for (let i = 0; i < n; i++) {
        totalMap[i] = totalMap[i].replaceAll("0", "#");
        totalMap[i] = totalMap[i].replaceAll("1", " ");
    }
    
    console.log(totalMap);
    
    return totalMap;
}