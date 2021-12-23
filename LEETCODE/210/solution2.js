/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function(numCourses, prerequisites) {
  const finished = Array(numCourses).fill(false);
  const matrix = [...Array(numCourses)].map(() => Array(numCourses).fill(false));

  for(let [c, p] of prerequisites){
    matrix[c][p] = true;
  }

  const answer = [];
  const isLeaf = (course) => {
    for(let i = 0; i < numCourses; i++){
      if(matrix[course][i] && !finished[i]) return false;
    }

    return true;
  }

  const findLeaf = () => {
    // 리프 찾기
    let leaf = [];
    for(let i = 0; i < numCourses; i++){
      if(!finished[i] && isLeaf(i)) leaf.push(i);
    }

    // 없으면 리턴
    if(leaf.length == 0) return;

    takeCourse(leaf);    
  }

  const takeCourse = (leaf) => {
    for(let l of leaf){
      finished[l] = true;
      answer.push(l);
    }

    findLeaf();
  }

  findLeaf();

  if(answer.length < numCourses) return [];
  return answer;
};


console.log(findOrder(4, [[1,0],[2,0],[3,1],[3,2]]));