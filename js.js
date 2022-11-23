n = 10e12

for (let i = 0; i < 100; i++) {
    n = Math.pow(10,i);
    console.log(i, "==>", (Math.sqrt(n+9)-Math.sqrt(n))*Math.sqrt(5*n-1))
}
