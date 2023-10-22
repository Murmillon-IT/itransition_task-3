'use strict'

// Function for determining the winner
const determineWinner = (index1, index2, array) => {
    const middleIndex = Math.floor(array.length / 2) + 1
    const arrayWin = array
        .slice(index1 + 1, index1 + middleIndex)
        .concat(array.slice(0, Math.max(0, middleIndex - (array.length - index1))))

    if (array[index2] === array[index1]) {
        return 'Draw'

    } else if (arrayWin.includes(array[index2])) {
        return 'Win'

    } else {
        return 'Lose'
    }
}

export default determineWinner