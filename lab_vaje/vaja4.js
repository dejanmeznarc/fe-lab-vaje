CHARTABLE = ['a', 'b', 'c', 'č', 'd',
    'e', 'f', 'g', 'h', 'i',
    'j', 'k', 'l', 'm', 'n',
    'o', 'p', 'r', 's', 'š',
    't', 'u', 'v', 'z', 'ž', '_', 0];

let chartableLen = 1
for (; CHARTABLE[chartableLen] !== 0; chartableLen++) {}

PLAIN_MESSAGE = ['p', 'r', 'e', 'm', 'i', 'k', '_',
    'v', 's', 'e', 'h', '_',
    'e', 'n', 'o', 't', '_',
    'i', 'z', '_',
    'b', 'r', 'e', 't', 'a', 'n', 'i', 'j', 'e', '_',
    'v', '_',
    'g', 'a', 'l', 'i', 'j', 'o', '_',
    't', 'a', 'k', 'o', 'j', '_',
    'c', 'a', 'e', 's', 'a', 'r', 0];


function getChartableIndex(char) {
    for (let i = 0; CHARTABLE[i] !== 0; i++) {
        if (char == CHARTABLE[i]) return i;
    }
}


function encryptCezar(char,  offset = 3, decrypt = false ) {

    idx = getChartableIndex(char) + (decrypt ? offset : -offset);
    if(idx < 0){
        idx = idx + chartableLen;
    } else if(idx >= chartableLen){
        idx = idx - chartableLen;
    }
    return CHARTABLE[idx];
}


console.log(encryptCezar("c",3));
console.log(encryptCezar("_",3,true));


IMPORTANT_MESSAGE = [
    'v','n','p','b','m','e',
    'g','n','u','l','m','e',
    'f','b','p','u','k','z',
    'b','h','e','g','n','u',
    'l','k','z','b','č','j',
    'e','h', 0];


str ="\n";
for (let i = 0; IMPORTANT_MESSAGE[i] !== 0; i++) {
    str += encryptCezar(IMPORTANT_MESSAGE[i],-22,true);
}

console.log(str)






