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


function checkCellForWinner(row, col) {
    const cellValue = gameState[row][col];

    if (cellValue === 0) return 0;

    for (let rowOfst = -1; rowOfst <= 1; rowOfst++) {
        for (let colOfst = -1; colOfst <= 1; colOfst++) {

            const newRow = row + rowOfst;
            const newCol = col + colOfst;

            if (!(rowOfst === 0 && colOfst === 0)) { // dont return same point
                if (gameSlotDoesExists(newRow, newCol)) {
                    if (cellValue === gameState[newRow][newCol]) {
                        // neighbour found
                        const lenght = followPath(newRow, newCol, [rowOfst, colOfst]);

                        if (lenght >= GAME_WIN_THRESHOLD) {
                            return cellValue;
                        }

                    }
                }
            }

        }
    }

    return 0;


}

function followPath(rowStart, colStart, direction) {
    const originalValue = gameState[rowStart][colStart];
    let curRow = rowStart;
    let curCol = colStart;

    let cnt = 2;

    while (cnt <= GAME_WIN_THRESHOLD) {
        curRow += direction[0];
        curCol += direction[1];

        if (gameSlotDoesExists(curRow, curCol) && originalValue === gameState[curRow][curCol]) {
            cnt++;
        } else {
            break;
        }
    }

    return cnt;
}


function getGameWinner() {
    for (let row = 0; row < GAME_ROWS; row++) {
        for (let col = 0; col < GAME_COLS; col++) {
            let winner = checkCellForWinner(row, col);
            if (winner > 0) return winner;
        }
    }
    return 0;
}


gameState = [
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 1, 1, 1, 2],
];
gameStateRender();
getGameWinner();

console.log("winner", getGameWinner())














