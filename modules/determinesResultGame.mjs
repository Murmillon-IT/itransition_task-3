'use strict'

// Determines the result of the game
const determinesResultGame = (playerIndex, computerIndex, array, keyHMAC) => {
    const key = `HMAC key: ${keyHMAC}`
    const middleIndex = Math.floor(array.length / 2) + 1 // middle index depending on the number of moves
    // We get an array of moves. If the computer has chosen one of the moves that matches the moves of this array, then we win
    const arrayWin = array
        .slice(playerIndex + 1, playerIndex + middleIndex)
        .concat(array.slice(0, Math.max(0, middleIndex - (array.length - playerIndex))))

    if (array[computerIndex] === array[playerIndex]) {
        console.log('Draw')
        console.log(key)

    } else if (arrayWin.includes(array[computerIndex])) {
        console.log('You Win!')
        console.log(key)

    } else {
        console.log('You Lose')
        console.log(key)
    }
}

export default determinesResultGame