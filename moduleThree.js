var modOne = require('./moduleOne');
var modTwo = require('./moduleTwo');
// adding in moduleOne and moduleTwo

exports.firstFunction = function () {
  return modTwo( modOne(100, 1000000));  // $XXX,XXX.00
};

exports.secondFunction = function () {
  return 'Account balance: \n';
};
