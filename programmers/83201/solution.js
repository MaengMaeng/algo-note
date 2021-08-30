function solution(scores) {
  let answer = '';
  const length = scores.length;

  const getGrade = (score) => {
    if(score >= 90) return 'A';
    if(score >= 80) return 'B';
    if(score >= 70) return 'C';
    if(score >= 50) return 'D';
    return 'F';
  }

  const getAverage = (student) => {
    let max = 0, min = Infinity, sum = 0, selfScore = scores[student][student];
    
    for(let i = 0; i < length; i++){
      if(i == student) continue;
      
      max = Math.max(max, scores[i][student]);
      min = Math.min(min, scores[i][student]);

      sum += scores[i][student];
    }

    if(selfScore > max || selfScore < min) return sum/(length - 1)

    return (sum + selfScore) / length;
  }

  for(let i = 0; i < length; i++){
    answer += getGrade(getAverage(i));
  }
  
  return answer;
}