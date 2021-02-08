package SWEXPERT;

import java.util.Scanner;

public class 오목판정 {

	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		int T = sc.nextInt();

		for (int test_case = 1; test_case <= T; test_case++) {
			int N = sc.nextInt();
			
			char[][] board = new char[N][];
			
			for(int i = 0; i < N; i++) {
				board[i] = sc.next().toCharArray();
			}
			
			System.out.println("#" + test_case + " " + solution(N, board));
		}

		sc.close();
	}

	public static String solution(int N, char[][] board) {
		int[][][] memo = new int[N][N][4];
		int[][] check = {{0, 1}, {1, 1}, {1, 0}, {1, -1}}; 
		/*
		 * 0 : 가로
		 * 1 : 왼쪽 상단 대각선
		 * 2 : 세로
		 * 3 : 오른쪽 상단 대각선
		 */
		
		for(int i = 0; i < N; i++) {
			for(int j = 0; j < N; j++) {
				if(board[i][j] == 'o') {
					for(int k = 0; k < 4; k++) {
						try {
							memo[i][j][k] = memo[i - check[k][0]][j - check[k][1]][k] + 1; 
						}
						catch (Exception e) {
							memo[i][j][k] = 1;
						}
						finally {
							if(memo[i][j][k] == 5) {
								return "YES";
							}
						}
					}
					
				}
			}
		}
		
		return "NO";
	}
}
