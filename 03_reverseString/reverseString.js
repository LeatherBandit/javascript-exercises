const reverseString = function(stringToBeReversed) {

    let reversedString = "";

    for (i=stringToBeReversed.length - 1; i >= 0; i--){
        reversedString += stringToBeReversed[i];
    }

    return reversedString;

};

console.log(reverseString("apple"));

// Do not edit below this line
module.exports = reverseString;
