napetost = 10;
notranjaUpornostOhm = 10;


bremeUpornostMax = 0.5;
bremeUpornostMin = 0;

natancnost = (bremeUpornostMax - bremeUpornostMin) / 5;


Rb = bremeUpornostMin;

for (let i = 0; i < 4; i++) {
    P = (napetost * napetost * Rb) / Math.pow(notranjaUpornostOhm + Rb, 2)

    Rb += natancnost;

    console.log(Rb, P)
}


// recursion

