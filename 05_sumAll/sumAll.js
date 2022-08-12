const sumAll = function(min, max) {
    let allSum = 0;
    let tempMin = min;

    if (min > max) {
        min = max;
        max = tempMin;        
    }

    if (min <= -1 || max <= -1 || Number.isInteger(min) != true || Number.isInteger(max) != true ) {
        return "ERROR"
    }

    for (i = min; i <= max; i++) {
        allSum += i;
    }
    return allSum;
};

// Do not edit below this line
module.exports = sumAll;