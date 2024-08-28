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

// Bean Counting

function countBs(x) {
    let count = 0
    for (let i = 0; i < x.length; i++) {
        if (x[i] === 'B') {
            count++
        }
    }
    return count
}

function countChar(x, y) {
    let count = 0;
    for (let i = 0; i < x.length; i++) {
        if (x[i] === y) {
            count++
        }
    }
    return count;
}