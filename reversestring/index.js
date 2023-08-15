// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  return [...str].reverse().join("");
}

/*
//solution 2:
function reverse(str) {
  let reversed = "";
  for (let sign of str) {
    reversed = sign + reversed;
  }
  return reversed;
}
//solution 3:
function reverse(str) {
  return str.split("").reduce((reversed, sign) => sign + reversed, "");
}
*/

module.exports = reverse;
