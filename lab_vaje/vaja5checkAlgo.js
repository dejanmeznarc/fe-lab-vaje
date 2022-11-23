const GAME_ROWS = 10
const GAME_COLS = 10
const GAME_WIN_THRESHOLD = 4


const GAME_STATE_NEUTRAL = 0
gameState = [
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
];
gameStateReset();


function getGameState(row, col) {
    return gameState[row][col];
}


function gameStateReset() {
    gameState = [];
    for (let row = 0; row < GAME_ROWS; row++) {
        let curRow = [];
        for (let col = 0; col < GAME_COLS; col++) {
            curRow.push(GAME_STATE_NEUTRAL);
        }
        gameState.push(curRow);
    }
}

function validateGameStateCords(r, c) {
    return !((r >= GAME_ROWS || c >= GAME_COLS || r < 0 || c < 0));
}


function gameStateRender() {
    let buf = "";
    for (let row = 0; row < GAME_ROWS; row++) {

        for (let col = 0; col < GAME_COLS; col++) {
            buf += gameState[row][col] + " ";
        }
        buf += "\n";
    }

    console.log(buf);
}


function gameCellFollowPath(start_row, start_col, dir, step = 0) {
    step++;
    const new_row = start_row + dir.row;
    const new_col = start_col + dir.col;

    if (validateGameStateCords(new_row, new_col)) {
        if (getGameState(start_row, start_col) === getGameState(new_row, new_col)) {
            return gameCellFollowPath(new_row, new_col, dir, step);
        }
    }

    return step;
}


function gameCellCountAll(row, col) {
    const dirs = [
        {row: 0, col: 1},
        {row: 1, col: -1},
        {row: 1, col: 0},
        {row: 1, col: 1},
    ];
    for (const dir in dirs) {
        if (gameCellFollowPath(row, col, dirs[dir]) >= GAME_WIN_THRESHOLD) {
            return getGameState(row, col);
        }
    }
    return false;
}


function gameGetWinner() {
    for (let row = 0; row < GAME_ROWS; row++) {
        for (let col = 0; col < GAME_COLS; col++) {
            if (getGameState(row, col) !== GAME_STATE_NEUTRAL) {
                const valWinner = gameCellCountAll(row, col);
                if (valWinner) {
                    return valWinner;
                }
            }
        }
    }
    return false;
}

function gamePlayerPutIn(player_id, col) {
    if (!validateGameStateCords(0, col)) {
        return 1; // invalid col id
    }
    if (player_id === GAME_STATE_NEUTRAL) {
        return 2; // invalid player name
    }

    for (let row = GAME_ROWS - 1; row >= 0; row--) {
        if (gameState[row][col] === GAME_STATE_NEUTRAL) {
            gameState[row][col] = player_id;
            return 0; // all ok
        }
    }
    return 3; // col is full
}


function gameCycle() {

    let prevPlayer = false;
    gameStateRender();

    for (let turn = 0; turn < (GAME_COLS * GAME_ROWS); turn++) {
        while (true) {
            const selectedCol = prompt("Na vrsti je igralec #" + (prevPlayer + 1) + ": ");
            let err = gamePlayerPutIn(prevPlayer + 1, selectedCol);

            if (err === 1) console.log("ERR; Napačen stolpec. (od 0 do 6)");
            if (err === 3) console.log("ERR; Stolpec je poln");

            if (err === 0) break;
        }

        gameStateRender();

        const winner = gameGetWinner();
        if (winner) {
            console.log("Zmagal je igralec #" + winner);
            return winner;
        }

        prevPlayer = !prevPlayer;
    }

    console.log("Neodločeno!");
    return false;
}


function loop() {
    while (1) {
        gameCycle();
        gameStateReset();
    }
}


loop();