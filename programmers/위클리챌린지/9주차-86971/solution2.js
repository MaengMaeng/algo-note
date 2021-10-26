function solution(n, wires) {
  const vertex = Array(n + 1);

  for(let i = 0; i < n - 1; i++){
    let[x, y] = wires[i];

    if(vertex[x] == undefined){
      vertex[x] = {
        value: null,
        child:[]
      }
    }

    vertex[x].child.push(y);
  }

  console.log(vertex);
}

solution(9, [[1,3],[2,3],[3,4],[4,5],[4,6],[4,7],[7,8],[7,9]]);