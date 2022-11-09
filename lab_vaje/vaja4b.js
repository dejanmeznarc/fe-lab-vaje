CHARTABLE = ['a', 'b', 'c', 'č', 'd',
    'e', 'f', 'g', 'h', 'i',
    'j', 'k', 'l', 'm', 'n',
    'o', 'p', 'r', 's', 'š',
    't', 'u', 'v', 'z', 'ž', '_', 0];
let chartableLen = 1
for (; CHARTABLE[chartableLen] !== 0; chartableLen++) {}

function getChartableIndex(char) {
    for (let i = 0; CHARTABLE[i] !== 0; i++) {
        if (char == CHARTABLE[i]) return i;
    }
}


function encryptCezar(char, offset = 3, encrypt = true) {

    idx = getChartableIndex(char) + (encrypt ? -offset : offset);
    if (idx < 0) {
        idx = idx + chartableLen;
    } else if (idx >= chartableLen) {
        idx = idx - chartableLen;
    }
    return CHARTABLE[idx];
}

////////////////////////////////


// secrets
passwd = ['a', 'm', 'f', 'o', 'r','a']

msg = ['p', 'r', 'i', 'm', 'i','t','e'];
encMsg = [];

for (let i = 0; i < msg.length; i++) {
    encMsg[i] = pa
}

