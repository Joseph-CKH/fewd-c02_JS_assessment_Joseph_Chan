const prompt = require('prompt-sync')({ sigint: true });

const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';

// console.log(hight)

// userLocation = [0 /*row*/, 0/*column*/]
// move to left column + 1
// move to right column - 1
// move to up row -1
// move to down row +1

const myField = [
    // ['*'/*row 0 column 0*/, '░'/*row 0 column 1*/, 'O'/*row 0 column 2*/], // 0
    // ['░', 'O', '░'], // 1
    // ['░', '^', '░'], // 2
    ['*', '░', 'O'], // 0
    ['*', 'O', '░'], // 1
    ['░', '^', '░'], // 2
    ['░', '^', '░'], // 3
    ['░', '^', '░'], // 4
    ['░', '^', '░'], // 5
    ['░', '^', '░'], // 6
    ['░', '^', '░'], // 7
    ['░', '^', '░'], // 8
    ['░', '^', '░'], // 9
]


const hight = prompt('hight?')
const width = prompt('width?')

const field = []
    /*
    [
        ['░', '░', '░'],
        ['░', '░', '░'],
        ['░', '░', '░']
    ]
    */

for (let i = 0; i < hight; i++) {
    let row = []
    for (let j = 0; j < width; j++) {
        row.push('░')
    }
    field.push(row) // ['░', '░', '░']
}
console.log(field)

const userLocation = [0 /*row*/ , 0 /*column*/ ]

let [row, column] = userLocation

field[row][column] = '*'

const moveTo = prompt('move?')
if (moveTo === 'left') {
    column++
    field[row][column] = '*'
}


console.log(field)

// console.log(myField.length) // height
// console.log(myField[0].length) // width