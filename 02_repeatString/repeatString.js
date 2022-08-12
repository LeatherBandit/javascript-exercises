const repeatString = function(thingToRepeat, times) {
    completeString="";

    if (parseInt(times) <= -1) {
        return "ERROR"
    }

    for (i=0; i<times; i++) {
        completeString += thingToRepeat;
    }
    return completeString;
};

// Do not edit below this line
module.exports = repeatString;
