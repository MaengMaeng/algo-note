const sumBigInt = (num1, num2) => {
  let n1, n2;
  if(num1.length > num2.length){
    n1 = num1.split("").reverse();
    n2 = num2.split("").reverse();
  }
  else{
    n1 = num2.split("").reverse();
    n2 = num1.split("").reverse();
  }

  let upper = 0, sum, result = "";
  for(let i = 0; i < n1.length; i++){
    if(i < n2.length) sum = n1[i]*1 + n2[i]*1 + upper;
    else sum = n1[i]*1 + upper;
    upper = 0;

    if(sum > 9){
      sum -= 10;
      upper = 1;
    }

    result += sum + "";
  }
  if(upper) result += "1";

  result = result.split("").reverse();
  while(result[0] == "0"){
    result.shift();
  }

  if(result.length == 0) return "0";
  return result.join("");
}

const mulBigInt = (num1, num2) => {
  let result = "0";
  const n1 = num1.split("").reverse();
  const n2 = num2.split("").reverse();

  for(let i = 0; i < n1.length; i++){
    let upper = 0, mulOne = "", mulLine = "";

    for(let digit of n2){
      if(digit){
        mulOne = ((digit*1) * (n1[i] * 1)) + upper;
        upper = 0;
  
        if(mulOne > 9){
          let k = (mulOne + "").split("");
          mulOne = k.pop();
          upper = k.join("")*1;
        }
  
        mulLine += mulOne;
      }
    }
    if(upper) mulLine += upper + "";
    result = sumBigInt(mulLine.split("").reverse().join("") + "0".repeat(i), result);
  }

  return result;
}
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function(num1, num2) {
  return mulBigInt(num1, num2);
};