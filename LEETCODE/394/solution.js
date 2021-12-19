/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function (s) {
  const stack = [1], str = [""], len = s.length;
  const digit = /[0-9]/, alpha = /[a-zA-Z]/;

  let index = 0, num = '';
  for(let i = 0; i < len; i++){
    // 숫자 일 경우
    if(digit.test(s[i])){
      num += s[i];
    }
    
    // 알파벳 일 경우
    else if(alpha.test(s[i])){
      str[index] += s[i];
    }

    else if(s[i] == "["){
      stack.push(num);
      str.push("");
      index++;

      num = '';
    }

    else if(s[i] == "]"){
      str[index - 1] += str.pop().repeat(stack.pop());
      index--;
    }
  }

  return str[0];
};

console.log(decodeString("20[abc]"));