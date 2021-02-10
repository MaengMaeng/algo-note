# 11. Container With Most Water

- [문제](https://leetcode.com/problems/container-with-most-water/)



### 문제

n개의 음이 아닌 정수가 주어진다. 가장 많은 물을 포함하게 되는 두 선을 찾아 물의 양을 나타내라.



### 풀이 방법

1. 완전 탐색

   - 이중 `for`문을 사용해서 찾는다.

     ```js
     var maxArea = function(height) {
         let answer = 0;
         let N = height.length;
         
         for(let i = 0; i < N - 1; i++){
             for(let j = i + 1; j < N; j++){
                 answer = Math.max(answer, Math.min(height[i], height[j]) * (j - i));         
             }
         }
         
         return answer;
     };
     ```

2. 두 점을 기준으로 찾기

   - 왼쪽 점 `l`, 오른쪽 점 `r`을 기준으로 찾는다.

     ```js
     var maxArea = function(height) {
         let answer = 0;
         let l = 0;
         let r = height.length - 1;
     
         while(l < r){
             answer = Math.max(answer, Math.min(height[l], height[r]) * (r - l));
     
             height[l] <= height[r] ? l++ : r--;
         }
         
         return answer;
     };
     ```

     

