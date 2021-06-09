/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
  const ROMAN = [
    ['M',1000],
    ['CM',900],
    ['D',500],
    ['CD',400],
    ['C',100],
    ['XC',90],
    ['L',50],
    ['XL',40],
    ['X',10],
    ['IX',9],
    ['V',5],
    ['IV',4],
    ['I',1]
  ];

  let remainder = num;
  let answer = '';
  let index = 0, length = ROMAN.length;

  while(remainder){
    for(let i = index; i < length; i++){
      if(remainder >= ROMAN[i][1]){
        answer += ROMAN[i][0];
        remainder -= ROMAN[i][1];
        break;
      }

      index++;
    }
  }

  return answer;
};