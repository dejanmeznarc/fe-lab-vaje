var gameState = [[0, 0], [0, 0]]; // 6x6 arr - [row][col]

const GAME_WIN_THRESHOLD = 4;
const GAME_ROWS = 6;
const GAME_COLS = 6;

function gameStateReset() {
    gameState = [
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
    ];
}

gameStateReset();
console.log(gameState);

function gameStateRender() {
    for (let row = 0; row < GAME_ROWS; row++) {
        rowf = "";
        for (let col = 0; col < GAME_COLS; col++) {
            rowf += gameState[row][col] + " ";
        }
        console.log(rowf);
    }
}

/**
 * 0 - ok
 * 1 - stolpec je poln
 * 2- wrong input
 */
function gamePutIn(playerId, colNum) {
    if (colNum >= GAME_COLS) return 2;
    for (let row = GAME_ROWS - 1; row >= 0; row--) {
        if (gameState[row][colNum] === 0) {
            gameState[row][colNum] = playerId;
            return 0;
        }
    }
    return 1;
}

function gameSlotDoesExists(row, col) {
    return ((row >= 0 && row < GAME_ROWS) && (col >= 0 && col < GAME_COLS));
}


function getNeighboursDirections(row, col,rowDir = null, colDir=null , rec_cnt = 0) {
    const cellValue = gameState[row][col];
    if (cellValue === 0) return rec_cnt;
    var neighboursDir = [];

    for (let rowOfst = -1; rowOfst <= 1; rowOfst++) {
        for (let colOfst = -1; colOfst <= 1; colOfst++) {

            const newRow = row+rowOfst;
            const newCol = col+colOfst;

            if (!(rowOfst === 0 && colOfst === 0)) { // dont return same point
                if (gameSlotDoesExists(newRow, newCol)) {
                    if (cellValue === gameState[newRow][newCol]) {
                        // neighbour found
                        if((rowOfst === rowDir && colOfst === colDir) || rowDir == null){
                            return (getNeighboursDirections(newRow, newCol, rowOfst, colOfst, rec_cnt+1));
                        }

                    }
                }
            }

        }
    }
    return rec_cnt;
}


function getGameWinner() {
    for (let row = 0; row < GAME_ROWS; row++) {
        for (let col = 0; col < GAME_COLS; col++) {

        }
    }

}


gamePutIn(1, 1);
gamePutIn(2, 3);
gamePutIn(2, 3);
gamePutIn(2, 3);
gamePutIn(1, 3);
gamePutIn(2, 3);
gamePutIn(2, 3);

gamePutIn(1, 2);
gamePutIn(2, 2);

gamePutIn(2, 4);
gamePutIn(2, 4);
gamePutIn(2, 5);
gamePutIn(2, 5);

gameStateRender();
console.log("0,0 => ", getNeighboursDirections(0, 0));
console.log("1,1 => ", getNeighboursDirections(1, 1));
console.log("4,3 => ", getNeighboursDirections(4, 3));
















