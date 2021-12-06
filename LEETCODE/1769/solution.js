/**
 * @param {string} boxes
 * @return {number[]}
 */
var minOperations = function (boxes) {
  let numOfOne = 0;
  let boxesArray = boxes.split("").map((v) => (v == "1" ? 1 : 0));
  
  for (let box of boxesArray) numOfOne += box;
  
  let sum = 0;
  for(let i = 0; i < boxesArray.length; i++){
    if(boxesArray[i] == 1) sum += i;
  }

  let plus = 0, minus = numOfOne;
  if(boxesArray[0] == 1){
    plus++;
    minus--;
  }

  let answer = [sum];

  for(let i = 1; i < boxesArray.length; i++){
    sum += plus - minus; 
    answer[i] = sum;
    if(boxesArray[i] == 1){
      plus++;
      minus--;
    }
  }

  return answer;
};
