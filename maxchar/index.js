// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  const numberOfChars = {};
  for (let char of str) {
    numberOfChars[char] = numberOfChars[char] + 1 || 1;
  }

  let max = 0;
  let maxChar = "";
  for (let char in numberOfChars) {
    if (numberOfChars[char] > max) {
      max = numberOfChars[char];
      maxChar = char;
    }
  }
  return maxChar;
}

module.exports = maxChar;
