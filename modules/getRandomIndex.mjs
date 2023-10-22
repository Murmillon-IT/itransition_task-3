'use strict'

// Move computer
const getRandomIndex = array => {
    const randomIndex = Math.floor(Math.random() * array.length)
    return randomIndex
}

export default getRandomIndex