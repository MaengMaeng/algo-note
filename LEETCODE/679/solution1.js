/**
 * @param {number[]} nums
 * @return {boolean}
 */
var judgePoint24 = function (nums) {
  const cal = (v1, v2, i) => {
    switch (i) {
      case 0:
        return v1 + v2;
      case 1:
        return v1 - v2;
      case 2:
        return v1 * v2;
      case 3:
        return v1 / v2;
      default:
        break;
    }
  };

  const calAll = (i0, i1, i2, i3) => {
    let val1 = nums[i0];
    for (let op1 = 0; op1 < 4; op1++) {
      let val2 = cal(val1, nums[i1], op1);
      for (let op2 = 0; op2 < 4; op2++) {
        let val3 = cal(val2, nums[i2], op2);
        for (let op3 = 0; op3 < 4; op3++) {
          if (cal(val3, nums[i3], op3) == 24) {
            return true;
          }
        }
      }
    }

    return false;
  };

  const calAllTwoBracket = (i0, i1, i2, i3) => {
    for (let op1 = 0; op1 < 2; op1++) {
      let val1 = cal(nums[i0], nums[i1], op1);

      for (let op2 = 0; op2 < 2; op2++) {
        let val2 = cal(nums[i2], nums[i3], op2);

        for (let op3 = 0; op3 < 4; op3++) {
          if (cal(val1, val2, op3) == 24) {
            return true;
          }
        }
      }
    }

    return false;
  };

  const arr = [1,2,3,4];

  for(let i0 = 0; i0 < 4; i0++){
    for(let i1 = 0; i1 < 4; i1++){
      for(let i2 = 0; i2 < 4; i2++){
        for(let i3 = 0; i3 < 4; i3++){
          if(arr[i0] * arr[i1] * arr[i2] * arr[i3] == (1*2*3*4)){
            if(calAll(i0, i1, i2, i3) || calAllTwoBracket(i0, i1, i2, i3)){
              return true;
            }
          }
        } 
      }
    }
  }

  return false;
};
