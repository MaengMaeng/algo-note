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