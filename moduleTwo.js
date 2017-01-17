var convertToUSD = function (numberToConvert) {
// this function returns the input with a US Dollar format applied.
    return numberToConvert.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
};

module.exports = convertToUSD;
