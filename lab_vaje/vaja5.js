var gameState = [[0, 0], [0, 0]]; // 6x6 arr - [row][col]

const GAME_WIN_THRESHOLD = 4;

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
    for (let row = 0; row < gameState.length; row++) {
        rowf = "";
        for (let col = 0; col < gameState[0].length; col++) {
            rowf += gameState[row][col] + " ";
        }
        console.log(rowf);
    }
}

function gamePutIn(playerId, colNum) {
    for (let row = gameState.length - 1; row >= 0; row--) {
        if (gameState[row][colNum] === 0) {
            gameState[row][colNum] = playerId;
            break;
        }
    }
}


function getGameWinner() {
    // check every row
    for (let row = 0; row < gameState.length; row++) {
        lastPlayerId = 0;
        count = 0;
        for (let col = 0; col < gameState[0].length; col++) {
            if (gameState[row][col] > 0) {
                count = (gameState[row][col] === lastPlayerId) ? count + 1 : 0;
                if(count >= GAME_WIN_THRESHOLD) return lastPlayerId;
            }
            lastPlayerId = gameState[row][col];
        }
    }

    // check every col


    for (let col = 0; col < gameState.length; col++) {
        lastPlayerId = 0;
        count = 0;
        for (let row = 0; row < gameState[0].length; row++) {
            if (gameState[col][row] > 0) {
                count = (gameState[col][row] === lastPlayerId) ? count + 1 : 0;
                if(count >= GAME_WIN_THRESHOLD) return lastPlayerId;
            }
            lastPlayerId = gameState[col][row];
        }
    }
}


gamePutIn(1, 1);
gamePutIn(2, 3);
gamePutIn(2, 3);
gamePutIn(2, 3);
gamePutIn(2, 3);

gameStateRender();
















