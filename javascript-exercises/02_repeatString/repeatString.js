const repeatString = function(str, num) {
    if (num < 0){return 'ERROR';}
    let res = '';
    for(let n = 1 ; n <= num; ++n){
        res += str;
    }
    return res;
};

// Do not edit below this line
module.exports = repeatString;
