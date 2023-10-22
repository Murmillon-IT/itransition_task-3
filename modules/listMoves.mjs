'use strict'

const listMoves = (array, hmac) => {
    console.log('HMAC: ' + hmac)
    console.log('Available moves:')

    for (let i = 0; i < array.length; i++) {
        console.log(`${i + 1} - ${array[i]}`)
    }
    console.log('0 - exit')
    console.log('? - help')
}

export default listMoves