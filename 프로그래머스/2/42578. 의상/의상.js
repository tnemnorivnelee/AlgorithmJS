function addValue(map, key, value) {
  if (map.has(key)) {
    map.get(key).push(value);
  } else {
    map.set(key, [value]);
  }
}

function solution(clothes) {
  const multiMap = new Map();

  for (let i = 0; i < clothes.length; i++) {
    const [clothe, key] = clothes[i];
    addValue(multiMap, key, clothe);
  }

  let total = 1;
    
  if (multiMap.size > 1) {
    for (const key of multiMap.keys()) {
      const size = multiMap.get(key).length + 1;
      total *= size;
    }
    total--;
  } else {
    total = clothes.length;
  }

    return total;
}