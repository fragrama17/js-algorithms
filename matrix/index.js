// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(n) {
    let minRow = 0;
    let minCol = 0;
    let maxRow = n - 1;
    let maxCol = n - 1;
    const matr = [];
    let x = 1;
    for (let i = 0; i < n; i++) matr.push([]);


    while (maxCol >= minCol -1 && minRow >= minRow -1) {

        // go right
        for (let i = minCol; i <= maxCol; i++) {
            matr[minRow][i] = x++;
        }
        minRow++;

        // go down
        for (let i = minRow; i <= maxRow; i++) {
            matr[i][maxCol] = x++;
        }
        maxCol--;

        // go left
        for (let i = maxCol; i >= minCol; i--) {
            matr[maxRow][i] = x++;
        }
        maxRow--;

        // go up
        for (let i = maxRow; i >= minRow; i--) {
            matr[i][minCol] = x++;
        }
        minCol++;

    }

    for (const m of matr) console.log("yeppaaaaaaa" + m);
    return matr;
}

matrix(5);

module.exports = matrix;
