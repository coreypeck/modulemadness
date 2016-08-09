// The third module should require the other two modules
// (i.e. Module One and Module Two). It should have two function
// exports:
//
// The first function export should return the result of the first
// module being passed into the second module.
// The second function export should return the text
// “Account balance: \n”.
var module1 = require("./module1.js");
var module2 = require("./module2.js");
exports.ranNumber = function() {
    var toMoney = module2.americanMoney(module1.randomNumber(100, 1000000)) + "\n";
    return toMoney;
}
exports.account = function() {
    return "Account balance: \n";
}
