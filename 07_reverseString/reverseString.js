const reverseString = function(string) {
    let arr1 = string.split('')
    let result = '';
    for (let i = arr1.length - 1; i >= 0; i--){
        result += arr1[i];
    }
    return result;



};

// Do not edit below this line
module.exports = reverseString;
