stevila = [11, 34, 987, 37, 2, 56, 23, 25, 24]

function getDividerCount(number) {
    ret = 0;
    for (let i = 0; i < number; i++) {
        if (number % i === 0) {
            ret++;
        }
    }
    return ret;
}

stevila.sort(function (trenutna, prejsna) {
    return getDividerCount(trenutna) - getDividerCount(prejsna);
})

console.log(stevila)














