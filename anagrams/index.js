// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
    const s1 = stringA.replace(/\W/g, "").toLowerCase();
    const s2 = stringB.replace(/\W/g, "").toLowerCase();

    if(stringA.length !== stringB.length)
        return false;

    let charsS1 = {}
    let charsS2 = {}

    for (let char of s1) {
        charsS1[char] = charsS1[char] + 1 || 1;
    }
    for (let char of s2) {
        charsS2[char] = charsS2[char] + 1 || 1;
    }

    for (const key in charsS1) {
        if (charsS1[key] !== charsS2[key])
            return false;
    }

    return true;
}



module.exports = anagrams;
