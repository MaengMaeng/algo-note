function solution(game_board, table) {
  const len = game_board.length;
  const shape = [];

  const visits = [...Array(len)].map(() => Array(len).fill(0));
  const directions = [[0, 1], [0, -1], [1, 0], [-1, 0]];

  let loute = [];
  let way;

  for(let x = 0; x < len; x++){
    for(let y = 0; y < len; y++){
      if(table[x][y] == 1 && visits[x][y] == 0){
        loute = [[x,y]];
        way = [];

        while(loute.length > 0){
          let [xx, yy] = loute.shift();
          visits[xx][yy] = 1;
          
          way.push(xx * (len) + yy);

          for(let i = 0; i < 4; i++){
            try {
              if(visits[xx + directions[i][0]][yy + directions[i][1]] == 0 && table[xx + directions[i][0]][yy + directions[i][1]] == 1){
                loute.push([xx + directions[i][0], yy + directions[i][1]]);
              }
            } catch (error) {}
          }
        }

        shape.push(way.sort((a, b) => a - b).map((v, i, a) => v - a[0]));
      }
    }
  }


  const shape2 = [];

  const visits2 = [...Array(len)].map(() => Array(len).fill(0));

  for(let x = 0; x < len; x++){
    for(let y = 0; y < len; y++){
      if(game_board[x][y] == 0 && visits2[x][y] == 0){
        loute = [[x,y]];
        way = [];

        while(loute.length > 0){
          let [xx, yy] = loute.shift();
          visits2[xx][yy] = 1;
          
          way.push(xx * (len) + yy);

          for(let i = 0; i < 4; i++){
            try {
              if(visits2[xx + directions[i][0]][yy + directions[i][1]] == 0 && game_board[xx + directions[i][0]][yy + directions[i][1]] == 0){
                loute.push([xx + directions[i][0], yy + directions[i][1]]);
              }
            } catch (error) {}
          }
        }

        shape2.push(way.sort((a, b) => a - b).map((v, i, a) => v - a[0]));
      }
    }
  }


  let a1 = shape.sort((a,b) => a.length - b.length);
  let a2 = shape2.sort((a,b) => a.length - b.length);

  const rotate = (array) => {
    return array.map((v) => {
      let x = Math.floor(v / len), y = v - (x * len);

      return (len - y - 1)*len + x;
    }).sort((a,b) => a - b).map((v, i, a) => v - a[0]);
  }

  let a1len = a1.length;
  let answer = 0;

  let check = Array(a1len).fill(0);

  for(let j = 0; j < a2.length; j++){
    let aa = a2[j];
    for(let i = 0; i < a1len; i++){
      for(let k = 0; k < 4; k++){
        if(aa.length == a1[i].length && check[i] == 0){
          if(aa.join('.') == a1[i].join('.')){
            check[i] = 1;
            answer += aa.length;
            break;
          }
          else{
            aa = rotate(aa);
          }
        }
        else{
          break;
        }
      }
    }
  }

  console.log(a1, a2);
  console.log(check);

  return answer;
}

console.log(solution([[1,1,0,0,1,0],[0,0,1,0,1,0],[0,1,1,0,0,1],[1,1,0,1,1,1],[1,0,0,0,1,0],[0,1,1,1,0,0]], [[1,0,0,1,1,0],[1,0,1,0,1,0],[0,1,1,0,1,1],[0,0,1,0,0,0],[1,1,0,1,1,0],[0,1,0,0,0,0]]));
