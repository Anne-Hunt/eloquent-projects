// Minimum

function min(x, y) {
    console.log(Math.min(x, y))
}

min(0, 10);
// → 0
min(0, -10);
// → -10

// Recursion

function isEven(x) {
    if (x < 0) {
        return '??'
    }
    if (x % 2 > 0) {
        return false
    } else {
        return true
    }
}