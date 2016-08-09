// The second module should accept a number and convert it to a USD value.
//
// HINT: You will want to Google examples of this. I found a couple
// reasonable examples of this in a simple 5-minute search.

exports.americanMoney = function(x) {
  var parts = x.toString().split(".");
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return parts.join(".");
}
