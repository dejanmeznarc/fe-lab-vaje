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



//
// arr = [1, 4, 5, 2, 3,2,5]
//
// function mySort() {
//     for (let j = 0; j < arr.length; j++) {
//         for (let i = 0; i < arr.length; i++) {
//             if (arr[i] > arr[i + 1]) {
//                 tmp = arr[i+1];
//                 arr[i+1] = arr[i];
//                 arr[i] = tmp;
//             }
//         }
//     }
// }
// mySort();
// console.log(arr);



for (let j = 0; j < stevila.length; j++) {
    for (let k = 0; k < stevila.length-1; k++) {
        if (getDividerCount(stevila[k]) > getDividerCount(stevila[k + 1])) {
            tmp = stevila[k + 1];
            stevila[k + 1] = stevila[k];
            stevila[k] = tmp;
        }
    }
}


console.log("mysort: " + stevila);


// todo sort function
stevila.sort(function (trenutna, prejsna) {
    return getDividerCount(trenutna) - getDividerCount(prejsna);
})

console.log("jsSort: " + stevila)














