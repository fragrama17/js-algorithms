// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort

function bubbleSort(arr) {

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < (arr.length - i - 1); j++) {
            if (arr[j] > arr[j + 1]) {
                const swap = arr[j + 1];
                arr[j + 1] = arr[j];
                arr[j] = swap;
            }
        }
    }

    return arr;
}

function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let indexOfMin = i;

        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[indexOfMin]) indexOfMin = j;
        }

        if (indexOfMin !== i) {
            let swap = arr[indexOfMin];
            arr[indexOfMin] = arr[i];
            arr[i] = swap;
        }
    }

    return arr;
}

function mergeSort(arr) {
    if (arr.length === 1) return arr;

    const center = Math.floor(arr.length / 2);
    let left = arr.slice(0, center);
    let right = arr.slice(center);

    return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
    const res = [];

    while (left.length && right.length) {
        if (left[0] < right[0]) res.push(left.shift());
        else res.push(right.shift());
    }

    return [...res, ...left, ...right];
}

module.exports = {bubbleSort, selectionSort, mergeSort, merge};
