// The Sum of a Range
let z = []
function range(x, y) {
    for (let i = x; i <= y; i++) {
        z.push(i)
    }
    return z
}

function sum(z) {
    let total = 0
    for (let i = 0; i < z.length; i++) {
        total + i
    }
    return total
}