function solution(scores) {
  let answer = '';
  const length = scores.length;
  const filteredScores = scores.map((v, i) => v.filter((vv, ii) => i != ii).sort((a, b) => b - a));

  const getGrade = (score) => {
    if(score >= 90) return 'A';
    if(score >= 80) return 'B';
    if(score >= 70) return 'C';
    if(score >= 50) return 'D';
    return 'F';
  }

  const getAverage = (student) => {
    let sum = 0, selfScore = scores[student][student];
    
    for(let i = 0; i < length - 1; i++){
      sum += filteredScores[i][student];
    }

    if(selfScore > max || selfScore < min) return sum/(length - 1)

    return (sum + selfScore) / length;
  }

  for(let i = 0; i < length; i++){
    answer += getGrade(getAverage(i));
  }
  
  return answer;
}