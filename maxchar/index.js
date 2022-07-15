// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    let chars = {}

    for (let char of str) {
        chars[char] = chars[char] + 1 || 1;
    }

    console.log(chars);

    let max = "";
    let c = 0;
    for (let char in chars) {
        if (chars[char] > c) {
            max = char;
            c = chars[char];
        }
    }

    return max;
}

module.exports = maxChar;
