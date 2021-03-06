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

    const fullHouse = (i, j) => {
        /**
         * set에 1~9 까지의 숫자를 저장
         */
        const set = new Set([1,2,3,4,5,6,7,8,9]);

        /**
         * 세로에서의 중복 숫자 제거
         */
        for(let n = 0; n < 9; n++){
            if(board[n][j] != '.') set.delete(Number(board[n][j]));
        }

        /**
         * 가로에서의 중복 숫자 제거
         */
        for(let n = 0; n < 9; n++){
            if(board[i][n] != '.') set.delete(Number(board[i][n]));
        }

        /**
         * 3 x 3 내에서의 중복 숫자 제거
         */
        const ver = Math.floor(i / 3) * 3, hor = Math.floor(j / 3) * 3;

        for(let h = 0; h < 3; h++){
            for(let v = 0; v < 3; v++){
                if(board[ver + v][hor + h] != '.') set.delete(Number(board[ver + v][hor + h]));
            }
        }

        if(set.size == 1){
            board[i][j] = [...set][0] + '';
            return true;
        }

        return false;
    }

    const hiddenSingle = (n) => {
        const newBoard = new Array(9);
        for(let i = 0; i < 9; i++){
            newBoard[i] = new Array(9);
            for(let j = 0; j < 9; j++){
                newBoard[i][j] = board[i][j] == '.' ? 1 : 0;
            }
        }

        for(let i = 0; i < 9; i++){
            for(let j = 0; j < 9; j++){
                if(board[i][j] == n){
                    for(let k = 0; k < 9; k++){
                        newBoard[i][k] = 0;
                        newBoard[k][j] = 0;
                    }

                    let ii = Math.floor(i / 3) * 3, jj = Math.floor(j / 3) * 3;
                    for(let ki = 0; ki < 3; ki++){
                        for(let kj = 0; kj < 3; kj++){
                            newBoard[ii + ki][jj + kj] = 0;
                        }
                    }
                }
            }
        }

        for(let i = 0; i < 9; i++){
            for(let j = 0; j < 9; j++){
                if(newBoard[i][j] == 1){
                    let ii = Math.floor(i / 3) * 3, jj = Math.floor(j / 3) * 3, count = 0;

                    for(let ki = 0; ki < 3; ki++){
                        for(let kj = 0; kj < 3; kj++){
                            count += newBoard[ii + ki][jj + kj];
                        }
                    }

                    if(count == 1){
                        board[i][j] = n;
                    }
                }
            }
        }
    }

    /**
     * 비어있는 자리가 없을 때 까지 반복
     */
    let l = locations.length, count = 0;
    while(locations.length){
        let [i, j] = locations.shift();

        console.log(locations.length);
        if(!fullHouse(i, j)){
            locations.push([i, j]);
            /**
             * 비어있는 자리를 모두 확인했을 때 멈춤
             */
            if(l == count) break;
            count++;
        }
        else{
            l = locations.length;
            count = 1;
        }
    }

    for(let i = 1; i < 9; i++){
        hiddenSingle(i);
    }

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