// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(4)
//       '   #   '
//       '  ###  '
//       ' ##### '
//       '#######'

function pyramid(n) {
    for (let row = 0; row < n; row++) {
        let pyr = '';
        for (let column = n / 2 + 1; column > 0; column--) {
            if (column <= row) {
                pyr += '#';
            } else {
                pyr += ' ';
            }
        }
        pyr += '#';
        for (let column = 0; column < n - 1; column++) {
            if (column < row) {
                pyr += '#';
            } else {
                pyr += ' ';
            }
        }
        console.log(pyr);
    }
}

pyramid(2);

module.exports = pyramid;
