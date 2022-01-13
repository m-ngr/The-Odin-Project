const sumAll = function(a,b) {
    if(!Number.isInteger(a) || !Number.isInteger(b)) {return "ERROR";}
    if ( 0 > a|| 0 > b) {return "ERROR";}

    let from = Math.min(a, b);
    let to = Math.max(a, b);
    let sum = 0;
    for(let n = from; n <= to; ++n){
        sum += n;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
