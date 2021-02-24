/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function(board) {
    const answer = board.slice();
    const m = board.length, n = board[0].length;
    let flag;

    const newVisits = () => {
        const visits = new Array(m);

        for(let x = 0; x < m; x++){
            visits[x] = new Array(n);

            for(let y = 0; y < n; y++){
                visits[x][y] = 0;
            }
        }

        return visits;
    }

    /**
     * 0: 상, 1: 하, 2: 좌, 3: 우
     */
    const direction = [[-1, 0], [1, 0], [0, -1], [0, 1]];
    const canGoOut = (x, y, visits) => {
        /**
         * error가 뜬다면 벽을 나갔다는 것이므로 flag = true;
         */
        for(let i = 0; i < 4; i++){
            try {
                if(!answer[x + direction[i][0]][y + direction[i][1]]){
                    flag = true;
                }
            } catch (error) {
                flag = true;
            }
        }

        /**
         * 나갈 수 있다면 더 이상 진행하지 않음
         */
        if(flag){
            return;
        }

        /**
         * 나갈 수 없다면 계속 진행
         */
        visits[x][y] = 1;
        for(let i = 0; i < 4; i++){
            if(!visits[x + direction[i][0]][y + direction[i][1]] && answer[x + direction[i][0]][y + direction[i][1]] == 'O'){
                canGoOut(x + direction[i][0], y + direction[i][1], visits);
            }
        }
    }

    const changeOtoX = (x, y) => {
        answer[x][y] = 'X';
        for(let i = 0; i < 4; i++){
            if(answer[x + direction[i][0]][y + direction[i][1]] == 'O'){
                changeOtoX(x + direction[i][0], y + direction[i][1]);
            }
        }
    }

    /**
     * 1. 'O' 찾기
     */
    for(let x = 0; x < m; x++){
        for(let y = 0; y < n; y++){
            if(board[x][y] == 'O'){
                flag = false;
                canGoOut(x, y, newVisits());  

                /**
                 * 나갈 수 없다면 'X'로 둘러 쌓인 것이므로 모두 'X'로 바꿔준다.
                 */
                if(!flag){
                    changeOtoX(x,y);
                }
            }
        }
    }

    return answer;
};

console.log(solve([["X","O","X","O"],["O","X","O","X"],["X","O","X","O"],["O","X","O","X"]]));