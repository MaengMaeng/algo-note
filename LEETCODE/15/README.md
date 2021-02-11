# 15. 3Sum

- [문제](https://leetcode.com/problems/3sum/)



### 문제

n개의 수가 주어진다. 합쳐서 0이 되는 세 수의 집합을 찾아라.



### 풀이 방법

1. 완전탐색
   - 시간 초과
   - O(n ^ 3)
2. 한 점에 대해서 그 값과 0이 되는 값 찾기
   - O(n ^ 2)
   ```js
   	for (let i = 0; i < length; i++) {
         let l = i + 1;
         let r = length - 1;

         while (l < r) {
            if (sortedNums[i] + sortedNums[l] + sortedNums[r] === 0) {
               !answer.find(
                  (e) =>
                     e[0] === sortedNums[i] &&
                     e[1] === sortedNums[l] &&
                     e[2] === sortedNums[r]
               ) && answer.push([sortedNums[i], sortedNums[l], sortedNums[r]]);
               l++;
               r--;
            } else {
               sortedNums[i] + sortedNums[l] + sortedNums[r] > 0 ? r-- : l++;
            }
         }
      }
   ```



