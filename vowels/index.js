// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
    const cases = 'aeiouAEIOU';
    let c = 0;

    for (const char of str)
        if (cases.includes(char)) c++;

    return c;
}


module.exports = vowels;
