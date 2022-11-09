
f0 = 1
f1 = 1
f2 = f1+f0;


for (let i = 0; i < 10; i++) {
    f1 = f2;
    f2 = (f2-f1) + f1;

}

console.log(f2);
