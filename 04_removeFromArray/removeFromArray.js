const removeFromArray = function(userArray, ...itemToRemove) {

    
    for (i = userArray.length -1; i >= 0; i--) {
        for (const arg of itemToRemove) {
            if (arg === userArray[i]) {
                userArray.splice(i, 1);
            }
        }
    }

    return userArray;

};


// Do not edit below this line
module.exports = removeFromArray;
