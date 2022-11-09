do {
    n = Number(prompt("Vnesi stevilo"));

    stDeljiteljev = 0;

    i = 0;
    do {
        if (n % i === 0) {
            console.log(i);
            stDeljiteljev++;
        }
        i++;
    } while (i < n)


    if (stDeljiteljev === 1) {
        console.log("Stevilo je prastevilo")
    }

} while (n !== 0)




