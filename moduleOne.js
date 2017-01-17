var randomNumber = function (min, max) {
// This function returns a random number between the min and max.
    return Math.floor(Math.random() * (1 + max - min) + min);
};

module.exports = randomNumber;
