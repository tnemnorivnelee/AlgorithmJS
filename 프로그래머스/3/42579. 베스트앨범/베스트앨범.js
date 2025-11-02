function solution(genres, plays) {

  const musicMap = new Map();

  for (let i = 0; i < genres.length; i++) {
    const key = genres[i];
    const value = plays[i];

    if (musicMap.has(key)) {
      musicMap.get(key).push({i, value});
    } else {
      musicMap.set(key, [{i, value}]);
    }
  }

  const totalPlays = new Map();

  for (let i = 0; i < genres.length; i++) {
    const key = genres[i];
    const value = plays[i];

    totalPlays.set(key, (totalPlays.get(key) || 0) + value);
  }


  const sortedGenres = [...totalPlays.keys()].sort((a, b) => {
    return totalPlays.get(b) - totalPlays.get(a);
  });

  for (let i = 0; i < sortedGenres.length; i++) {
    const genre = sortedGenres[i];

    musicMap.get(genre).sort((a, b) => b.value === a.value ? a.i - b.i : b.value - a.value);
  }
  

  const answer = [];

  for (let j = 0; j < sortedGenres.length; j++) {
    const genre = sortedGenres[j];

    const topTwo = musicMap.get(genre).slice(0, 2);

    for (const {i, value} of topTwo) {
      answer.push(i);
    }
  }

  return answer;
}