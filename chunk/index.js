// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
    const res = [];
    let subArr = [];
    let c = 0;

    for (const x of array) {
        if (++c === size) {
            subArr.push(x);
            res.push(subArr);
            subArr = [];
            c = 0;
        } else {
            subArr.push(x);
            if (array.indexOf(x) === array.length - 1)
                res.push(subArr);
        }
    }

    return res;
}

console.log(chunk([1, 2, 3, 4, 5, 6, 7, 8], 3));

module.exports = chunk;
