n = 11

stDeljiteljev = 0;

for (let i = 0; i < n; i++) {
    if(n % i === 0){
        console.log(i);
        stDeljiteljev++;
    }
}

if(stDeljiteljev === 1){
    console.log("Stevilo je prastevilo")
}



