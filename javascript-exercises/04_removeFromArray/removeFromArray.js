const removeFromArray = function(array, ...removeItems) {
    return array.filter(item => !removeItems.includes(item));
};

// Do not edit below this line
module.exports = removeFromArray;
