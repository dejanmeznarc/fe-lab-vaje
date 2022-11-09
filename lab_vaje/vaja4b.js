CHARTABLE = ['a', 'b', 'c', 'č', 'd',
    'e', 'f', 'g', 'h', 'i',
    'j', 'k', 'l', 'm', 'n',
    'o', 'p', 'r', 's', 'š',
    't', 'u', 'v', 'z', 'ž', '_', 0];
let chartableLen = 1
for (; CHARTABLE[chartableLen] !== 0; chartableLen++) {
}

function getChartableIndex(char) {
    for (let i = 0; CHARTABLE[i] !== 0; i++) {
        if (char == CHARTABLE[i]) return i;
    }
}

function cezarCode(char, offset = 3, decrypt = false) {
    idx = getChartableIndex(char) + (decrypt ? -offset : offset);
    if (idx < 0) {
        idx = idx + chartableLen;
    } else if (idx >= chartableLen) {
        idx = idx - chartableLen;
    }
    return CHARTABLE[idx];
}


////////////////////////////////


// secrets
passwd = ['a', 'm', 'f', 'o', 'r', 'a'];

msg = ['p', 'r', 'i', 'm', 'i', 't', 'e', 'o', 'b', 'e', 'l', 'i', 'k', 's', 'a', '\0'];
encMsg = [];

for (let i = 0; msg[i] !== '\0'; i++) {
    offset = getChartableIndex(passwd[i % passwd.length]);
    encMsg[i] = cezarCode(msg[i], offset, false);
}

console.log(encMsg);

console.log("pdocatecgtčikef");