# 운동

- [문제](https://swexpertacademy.com/main/code/problem/problemDetail.do?contestProbId=AWXRxnnah2sDFAUo)



### 풀이 방법

1. dfs
   - dfs를 통해서 cycle을 찾으려고 했다.
   - 시간 초과
2. 다익스트라
   - 정점 n에서 각 정점까지의 최소거리를 찾는다.
   - 각 정점에서 n으로 이어지는 간선이 있으면 n부터 i까지의 최소거리와 합해서 사이클을 찾는다.
   - !중요 - 자기 자신으로 돌아오는 간선이 있으므로 확인해야한다.