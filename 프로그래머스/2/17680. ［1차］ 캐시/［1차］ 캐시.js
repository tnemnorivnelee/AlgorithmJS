// 제이지는 도시 이름을 검색하면 해당 도시와 관련된 맛집 게시물을 데이터베이스에서 읽어 보여주는 서비스 개발
// 어피치는 서비스를 오픈하기 전 각 로직에 대한 성능 측정을 수행하였는데
// 제이지가 작성한 부분 중 데이터베이스에서 게시물을 가져오는 부분의 실행시간이 너무 오래걸리는 것을 발견
// 어치피는 제이지에게 해당 로직을 개선하라고 닦달
// 제이지는 디비 캐시를 적용하여 성능 개선을 시도하고 있지만 캐시 크기를 얼마로 해야 효율 적인지 몰라 난감

// 각 도시 이름은 공백, 숫자, 특수문자 등이 없는 영문자로 구성
// 대소문자 구분을 하지 않는다 -> toUpperCase() 사용
// 최대 도시 수는 100,000개 -> 시간 복잡도 여유 있음
// 캐시 사이즈가 0 부터 30까지 -> 0 인 경우 early return 가능

// cache hit -> 1 증가 / cache miss -> 5 증가

function solution(cacheSize, cities) {
    let time = 0;
    
    const cache = [];
    
    if (cacheSize === 0) return cities.length * 5;
    
    cities = cities.map((v) => v.toUpperCase());
    
    for (let i = 0; i < cities.length; i++) {
        const city = cities[i];
        
        if (cache.includes(city)) {
            cache.push(...cache.splice(cache.indexOf(city), 1));
            time += 1;
        } else {
            if (cache.length >= cacheSize) cache.shift();
            cache.push(city);
            time += 5;
        }
        
    }
    
    return time;
}