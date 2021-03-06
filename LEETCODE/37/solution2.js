/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
 var solveSudoku = function(board) {
    const locations = [];
    const length = 9;

    /**
     * set으로 비어있는 자리의 위치를 저장
     */
    for(let i = 0; i < length; i++){
        for(let j = 0; j < length; j++){
            if(board[i][j] == '.') locations.push([i, j]);
        }
    }

    /**
     * 들어갈 수 있는 자리인지 확인
     * 들어갈 수 있는 자리여도 정답은 아닐 수 있다.
     */
    const isValid = (i, j, k) => {
        for(let n = 0; n < 9; n++){
            if(board[n][j] == k) return false;
        }
 
        for(let n = 0; n < 9; n++){
            if(board[i][n] == k) return false;
        }
 
        const ii = Math.floor(i / 3) * 3, jj = Math.floor(j / 3) * 3;

        for(let h = 0; h < 3; h++){
            for(let v = 0; v < 3; v++){
                if(board[ii + v][jj + h] == k) return false;
            }
        }

        return true;        
    }

    const dfs = (locations, d) => {
        if(d >= locations.length){
            return true;
        }

        let [i, j] = locations[d];

        for(let n = 1; n <= 9; n++){
            if(isValid(i, j, n)){
                board[i][j] = n + '';

                if(dfs(locations, d + 1)){
                    break;
                }

                board[i][j] = '.';
            }
        }

        return board[i][j] == '.' ? false : true;
    }

    dfs(locations, 0);
    
    for(let i = 0; i < 9; i++){
        if(i == 0){
            console.log('┌───────┬───────┬───────┐');
        }
        if(i && i % 3 == 0){
            console.log('├───────┼───────┼───────┤');
        }
        let s = '';
        for(let j = 0; j < 9; j++){
            if(j % 3 == 0){
                s += '│ ';
            }
            s += board[i][j] + ' ';
            if(j == 8){
                s += '│ ';
            }
        }
        console.log(s);
        if(i == 8){
            console.log('└───────┴───────┴───────┘');
        }
    }
};

solveSudoku([[".",".","9","7","4","8",".",".","."],["7",".",".",".",".",".",".",".","."],[".","2",".","1",".","9",".",".","."],[".",".","7",".",".",".","2","4","."],[".","6","4",".","1",".","5","9","."],[".","9","8",".",".",".","3",".","."],[".",".",".","8",".","3",".","2","."],[".",".",".",".",".",".",".",".","6"],[".",".",".","2","7","5","9",".","."]]);