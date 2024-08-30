// The Sum of a Range
let z = []
function range(x, y) {
    z = []
    for (let i = x; i <= y; i++) {
        z.push(i)
    }
    return z
}

function sum(a) {
    let total = 0
    for (let i = 0; i <= a.length; i++) {
        total = total + i
    }
    return total
}

// Reversing an Array

function reverseArray(x) {
    let array = []
    for (let i = 0; i < x.length; i++) {
        array.unshift(x[i])
    }
    return array
}

function reverseArrayInPlace(x) {
    let place = ''
    for (let i = 0; i <= x.length / 2; i++) {
        place = x[x.length - 1 - i]
        x[x.length - 1 - i] = x[i]
        x[i] = place
    }
    return x
}

function arrayToList(x, y, z) {
    let list = { value: 0, rest: { value: 0, rest: { value: 0 } } }

}

function listToArray(x) {

}

function deepEqual(x, y) {

}