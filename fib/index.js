// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

function fib(n, start = n, series = [0], a0 = 0, a = 1) {
    if (start < 2 ) {
        return start;
    }
    if (series.length === start) {
        return series[series.length - 1];
    }

    series.push(a + a0);
    let prev = a;
    a = a + a0;
    a0 = prev;
    return fib(n - 1, start, series, a0, a);
}

fib(1);

module.exports = fib;
