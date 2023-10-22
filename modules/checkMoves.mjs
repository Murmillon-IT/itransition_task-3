'use strict'

import findDuplicateElements from './findDuplicateElements.mjs'

//? Check moves
const checkMoves = array => {
    // Checking for parity and quantity
    if (array.length % 2 === 0 || array.length < 2) {
        console.log('Please write three or more odd moves and also avoid repeating the same moves.')
        process.exit();

    // Checking for duplicates
    } else if (array.length !== new Set(array).size) {
        const duplicateElements = findDuplicateElements(array).join(' ')
        console.log('Please avoid repeating the same moves. Your identical moves: '+ duplicateElements)
        process.exit();
    }
}

export default checkMoves