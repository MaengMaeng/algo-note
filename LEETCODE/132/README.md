# 132. Palindrome Partitioning II

- [문제](https://leetcode.com/problems/palindrome-partitioning-ii/)


### 풀이 방법

1. 0 부터 length 까지 `s`의 뒤에서 부터 회문을 찾는다.
   - 문제점
      - 회문을 뒤에서 부터 찾기 때문에, `aaabaa`의 경우에 `aaa`, `b`, `aa`로 나누게 된다.
      - 앞에서 부터 찾아도 같은 문제가 발생한다.
2. dp
   - dp[0] = -1
   - 똑같이 뒤에서 부터 모든 회문을 찾는다.
   - Math.min을 통해 만들어진 회문 + dp[j] 값 에서 가장 작은 값을 선택한다.