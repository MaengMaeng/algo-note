/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(heights) {
  const stack = [];
  const hs = [0].concat(heights).concat([0]), len = hs.length;

  let maxArea = 0;

  for(let i = 0; i < len; i++){
    while(stack.length && hs[stack[stack.length - 1]] > hs[i]){
      let j = stack.pop();
      maxArea = Math.max((i - stack[stack.length - 1] - 1) * hs[j], maxArea);
      console.log(i, stack, stack.map((v) => hs[v]),(i - stack[stack.length - 1] - 1) * hs[j]);
    }

    stack.push(i);
  }

  return maxArea;
};

console.log(largestRectangleArea([2,1,5,6,2,3]));