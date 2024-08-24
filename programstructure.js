//NOTE - FOR LOOP

let x = ''
for (let i = 0; i < 7; i++) {
    x += '#'
    console.log(x)
}

//NOTE - FIZZBUZZ

for (let i = 1; i < 101; i++) {
    if (i % 3 < 1 && i % 5 < 1) {
        console.log('fizzbuzz')
    }
    if (i % 3 < 1) {
        console.log('fizz')
    }
    else if (i % 5 < 1) {
        console.log('buzz')
    }
    else
        console.log(i)
}

//NOTE - Chessboard