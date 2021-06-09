/**
 * @param {number[][]} rectangles
 * @return {number}
 */
var rectangleArea = function (rectangles) {
  const tree = new Array(65538), count = new Array(65538);
  const arr = [], length = rectangles.length;

  const update = (x, left, right, nodeLeft, nodeRight, value) => {
    if(left > nodeRight || right < nodeLeft) return;
    if(left <= nodeLeft && right >= nodeRight) count[x] = count[x]|0 + value;
    else{
      let mid = (nodeLeft + nodeRight) >> 1;
      update(x*2,  left, right, nodeLeft, mid, value);
      update(x*2 + 1,  left, right, mid + 1, nodeRight, value);
    }

    tree[x] = 0;
    if(count[x]|0 > 0) tree[x] = nodeRight-nodeLeft+1;
    if(count[x]|0 == 0 && nodeLeft < nodeRight) tree[x] = (tree[x*2]|0) + (tree[x * 2 + 1]|0); 
  }

  for(let i = 0; i < length; i++){
    let [x1, y1, x2, y2] = rectangles[i];
    arr[i * 2] = {x:x1, y1, y2, end:1};
    arr[i * 2 + 1] = {x:x2, y1, y2, end:-1};
  }

  arr.sort((a,b) => a.x == b.x ? b.end - a.end : a.x - b.x);

  console.log(arr);
  let px = arr[0].x;
  let answer = 0;

  for(let i = 0; i < length*2; i++){
    answer += (arr[i].x - px) * (tree[1]|0);
    update(1, arr[i].y1, arr[i].y2 - 1, 0, 32798, arr[i].end);
    px = arr[i].x;
  }

  console.log(tree);
  return answer;
};
