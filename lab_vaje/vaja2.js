tabela = [1,1,1,2,2,2]
tabela.sort();

prevNum = tabela[0];
cnt = 1
maxCnt = 1;
modus = null;
for (let i = 1; i <= tabela.length; i++) {
    if(prevNum === tabela[i]){
        cnt++;
    }else {
        if(cnt > maxCnt){
            maxCnt = cnt;
            modus = tabela[i-1];
        }
        cnt = 1;
    }
    prevNum = tabela[i];
}

console.log("Modus mnozice je: " + modus);












