/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function(numCourses, prerequisites) {
  const finished = Array(numCourses).fill(false);
  const parents = [...Array(numCourses)].map(() => []);

  for(let [c, p] of prerequisites){
    parents[c].push(p);
  }

  const answer = [];

  const dfs = (course) => {
    if(answer.length == numCourses) return;

    if(parents[course].length == 0){
      answer.push(course);
      finished[course] = true;

      let next = -1;
      for(let i = 0; i < numCourses; i++){
        let index = parents[i].indexOf(course);
        if(index != -1){
          parents[i].splice(index, 1);
        }
        if(!finished[i] && parents[i].length == 0){
          next = i;
        }
      }

      if(next != -1){
        dfs(next);
      }
    }
    else{
      for(let i = 0; i < numCourses; i++){
        if(!finished[i] && parents[i].length == 0){
          return dfs(i);
        }
      }
    }
  }

  dfs(0);

  if(answer.length < numCourses) return [];
  return answer;
};


console.log(findOrder(4, [[1,0],[2,0],[3,1],[3,2]]));