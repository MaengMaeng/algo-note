# 문제

### Leetcode
- [4. Median of Two Sorted Arrays](https://leetcode.com/problems/median-of-two-sorted-arrays/)
- [11. Container With Most Water](https://leetcode.com/problems/container-with-most-water/)
- [15. 3Sum](https://leetcode.com/problems/3sum/)
- [18. 4Sum](https://leetcode.com/problems/4sum/)
- [30. Substring with Concatenation of All Words](https://leetcode.com/problems/substring-with-concatenation-of-all-words/)
- [10. Regular Expression Matching](https://leetcode.com/problems/regular-expression-matching/)
- [63. Unique Paths II](https://leetcode.com/problems/unique-paths-ii/)
- [128. Longest Consecutive Sequence](https://leetcode.com/problems/longest-consecutive-sequence/)
- [127. Word Ladder](https://leetcode.com/problems/word-ladder/)
- [130. Surrounded Regions](https://leetcode.com/problems/surrounded-regions/)
- [132. Palindrome Partitioning II](https://leetcode.com/problems/palindrome-partitioning-ii/)
- [1044. Longest Duplicate Substring](https://leetcode.com/problems/longest-duplicate-substring/)
- [174. Dungeon Game](https://leetcode.com/problems/dungeon-game/)
- [32. Longest Valid Parentheses](https://leetcode.com/problems/longest-valid-parentheses/)
- [42. Trapping Rain Water](https://leetcode.com/problems/trapping-rain-water/)
- [37. Sudoku Solver](https://leetcode.com/problems/sudoku-solver/)
- [45. Jump Game II](https://leetcode.com/problems/jump-game-ii/)
- [135. Candy](https://leetcode.com/problems/candy/)
- [456. 132 Pattern](https://leetcode.com/problems/132-pattern/)
- [679. 24 Game](https://leetcode.com/problems/24-game/)
- [322. Coin Change](https://leetcode.com/problems/coin-change/)
- [983. Minimum Cost For Tickets](https://leetcode.com/problems/minimum-cost-for-tickets/)
- [115. Distinct Subsequences](https://leetcode.com/problems/distinct-subsequences/)
- [120. Triangle](https://leetcode.com/problems/triangle/)


### swexpert
- [트리 흑백 색칠](https://swexpertacademy.com/main/code/problem/problemDetail.do?contestProbId=AWO6esOKOKQDFAWw)
- [오목 판정](https://swexpertacademy.com/main/code/problem/problemDetail.do?contestProbId=AXaSUPYqPYMDFASQ)
- [내전 경기](https://swexpertacademy.com/main/code/problem/problemDetail.do?contestProbId=AWO6esOKOKQDFAWw)


# Note
### 배열 작성 방법
1. new Array(n)
2. Array.from({length:n}, () => 0);
3. []

이 세개의 방법으로 m * m 의 배열을 만들 때 속도
1. new Array(n)
2. []
3. Array.from({length:n}, () => 0)

`1`과 `2`의 경우 2배, `2`와 `3`의 경우 5배 차이가 난다.
ex) n = 20000
new Array(n) => 3282
[] => 5320
Array.from({length:n}, () => 0) => 23213