/**
 * @param {string} s
 * @return {number}
 */
var calculate = function(s) {
  const arr = [];

  let num = "";
  for(let i = 0; i < s.length; i++){
    if(s[i].match(/[\+\-\*\/]/)){
      arr.push(num * 1);
      arr.push(s[i]);
      num = "";
    }
    else{
      num += s[i];
    }
  }
  arr.push(num * 1);
  for(let i = 0; i < arr.length; i++){
    if(arr[i] == "*"){
      arr[i + 1] = arr[i - 1] * arr[i + 1];
      arr[i - 1] = arr[i] = 0;
    }
    else if(arr[i] == "/"){
      arr[i + 1] = Math.floor(arr[i - 1] / arr[i + 1]);
      arr[i - 1] = arr[i] = 0;
    }
  }

  let answer = 0;
  let flag = 1;
  for(let i = 0; i < arr.length; i++){
    if(arr[i] == "+") flag = 1;
    else if(arr[i] == "-") flag = 0;
    else{
      answer += flag ? arr[i] : -arr[i];
    }
  }

  return answer;
};

console.log(calculate("3+2"));