// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(n) {
    const hash = "#"
    const space = " "
    let print = ""
    for (let i = 1; i <= n; i++) {
        let j;
        for (j = 0; j < i; j++){
            print += hash;
        }
        for (let k = j; k < n; k++) {
            print += space;
        }
        console.log(print)
        print = ""
    }
}


module.exports = steps;
