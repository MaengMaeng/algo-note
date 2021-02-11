package SWEXPERT;

import java.util.LinkedList;
import java.util.Scanner;

public class Æ®¸®Èæ¹é»öÄ¥ {
	static LinkedList<Integer>[] tree;
	
	public static void main(String args[]) throws Exception {
		Scanner sc = new Scanner(System.in);
		int T;
		T = sc.nextInt();
		
		for (int test_case = 1; test_case <= T; test_case++) {
			int N = sc.nextInt();
			tree = new LinkedList[N];
			
			for(int n = 0; n < N; n++) {
				tree[n] = new LinkedList<>();
			}
			
			int l, m;
			for(int n = 0; n < N - 1; n++) {
				l = sc.nextInt() - 1;
				m = sc.nextInt() - 1;
				
				tree[l].add(m);
				tree[m].add(l);
			}

			System.out.println("#" + test_case + " " + solution(N));
		}
		
		sc.close();
	}
	
	public static long solution(int N) {
		int[] visit = new int[N];
		long[] result = dfs(0, visit);
		
		return (result[0] + result[1]) % 1000000007;
	}
	
	public static long[] dfs(int current, int[] visit) {
		visit[current] = 1;
		long[] current_count = new long[2];
		
		/*
		 * 0 : °ËÁ¤
		 * 1 : Èò»ö
		 */
		current_count[0] = current_count[1] = 1;
		
		for(int child : tree[current]) {
			if(visit[child] == 0) {
				long[] child_count = dfs(child, visit);

				current_count[0] *= child_count[1];
				current_count[1] *= child_count[0] + child_count[1];
				
				current_count[0] %= 1000000007;
				current_count[1] %= 1000000007;
			}
		}
		
		return current_count;
	}
}
