package SWEXPERT;

import java.util.PriorityQueue;
import java.util.Scanner;

public class 운동 {
	static int INF = (Integer.MAX_VALUE / 2);
	
	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		int T = sc.nextInt();

		for (int test_case = 1; test_case <= T; test_case++) {
			int N = sc.nextInt(); // 정점의 갯수
			int M = sc.nextInt(); // 간선의 갯수

			int[][] map = new int[N][N];

			for (int m = 0; m < M; m++) {
				int s = sc.nextInt() - 1;
				int e = sc.nextInt() - 1;
				int d = sc.nextInt();

				map[s][e] = d;
			}

			System.out.printf("#%d %d\n", test_case, solution(N, map));
		}

		sc.close();
	}

	public static int solution(int N, int[][] map) {
		int answer = INF;

		PriorityQueue<int[]> queue;
		int[] dist;

		for (int n = 0; n < N; n++) {
			queue = new PriorityQueue<>((int[] o1, int[] o2) -> o1[1] - o2[1]);
			dist = new int[N];

			for (int i = 0; i < N; i++) {
				dist[i] = INF;

				if (map[n][i] > 0) {
					queue.add(new int[] { i, INF, -1 });
				}
			}

			queue.add(new int[] { n, 0, -1 });
			dist[n] = 0;

			while (!queue.isEmpty()) {
				int[] e = queue.poll();

				if (dist[e[0]] >= e[1]) {
					for (int i = 0; i < N; i++) {
						if (map[e[0]][i] > 0 && dist[e[0]] + map[e[0]][i] < dist[i]) {
							dist[i] = dist[e[0]] + map[e[0]][i];
							queue.add(new int[] { i, dist[i], e[0] });
						}
					}
				}
			}
			
			for(int i = 0; i < N; i++) {
				if(n == i && map[n][n] > 0) {
					answer = Math.min(answer, map[n][n]);
				}
				if(n != i && map[i][n] > 0) {
					answer = Math.min(answer, dist[i] + map[i][n]);
				}
			}
		}

		return answer >= INF ? -1 : answer;
	}
}
