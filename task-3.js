'use strict'

import { createInterface } from 'readline';
import Table from 'cli-table';
import checkMoves from './modules/checkMoves.mjs';
import { getRandomKey, createHmac } from './modules/hmac.mjs'
import listMoves from './modules/listMoves.mjs';
import getRandomIndex from './modules/getRandomIndex.mjs';
import determinesResultGame from './modules/determinesResultGame.mjs';
import determineWinner from './modules/determineWinner.mjs';

const moves = process.argv.slice(2)

const rl = createInterface({
    input: process.stdin,
    output: process.stdout
})

// Check move
checkMoves(moves)

// Move computer
const computerIndex = getRandomIndex(moves)

// Generation of a 256-bit cryptographically strong key
const key = getRandomKey()

// Creating HMAC using SHA-256
const hmac = createHmac(key, moves[computerIndex])

// Generating a list of moves (menu)
listMoves(moves, hmac)

// Processing a player's move
const playerMove = (answer, array, computerIndex) => {
    const playerIndex = parseInt(answer) - 1 // player's move

    //? Correct move
    // Checking the player's progress
    if (playerIndex < array.length && playerIndex >= 0) {
        console.log(`Your move: ${array[playerIndex]}`) // move player
        console.log(`Computer move: ${array[computerIndex]}`) // move computer

        // Determines the result of the game and key HMAC output
        determinesResultGame(playerIndex, computerIndex, array, key)
        rl.close()

        //? Exit
    } else if (playerIndex === -1) {
        console.log('Exit')
        rl.close()

        //? Help
    } else if (answer === '?') {
        // Creating a new table
        const table = new Table({});

        // Creating a table header
        const headerRow = ['v User\\PC >'].concat(array);
        table.push(headerRow);

        // Fill in the table with the results
        array.forEach((element1, index1) => {
            const row = [element1];
            array.forEach((element2, index2) => {
                // Here define the result for the combination of index1 and index2
                const result = determineWinner(index1, index2, array);
                row.push(result);
            });
            table.push(row);
        });

        // Output the table to the console
        console.log(table.toString());
        rl.question('Enter your move: ', answer => playerMove(answer, moves, computerIndex))

        //? Error
    } else {
        console.log('Please enter the correct move number')
        rl.question('Enter your move: ', answer => playerMove(answer, moves, computerIndex))
    }
}

rl.question('Enter your move: ', answer => playerMove(answer, moves, computerIndex))