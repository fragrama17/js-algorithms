// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

function levelWidth(root) {
    let i = 0;
    const counters = [0];
    const arr = [root, 's'];

    while (arr.length > 1) {
        let first = arr.shift();
        if (first === 's') {
            counters[++i] = 0;
            arr.push(first);
        } else {
            arr.push(...first.children);
            counters[i]++;
        }
    }

    return counters;
}

module.exports = levelWidth;
