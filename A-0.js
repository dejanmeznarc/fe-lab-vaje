// laboratorijske vaje so obvezne
// sporočit pet dni prej



function aliJeLetoPrestopno(leto){

    if(leto % 4 === 0){

        if(leto % 400 === 0){
            return true;
        }
        else if(leto % 100 === 0) {
            return false;
        }
        return true;
    }
    return false;
}


console.log(aliJeLetoPrestopno(2000))
console.log(aliJeLetoPrestopno(3223))
console.log(aliJeLetoPrestopno(1500))