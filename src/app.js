'use strict';

const { generateRandom4DigitNumber } = require('./numberGenerator');
const { calculateBullsAndCows } = require('./calculateBullsAndCows');
const {
  getUserInput,
  displayMessage,
  closeInputOutput,
} = require('./inputOutputOperations');

function main() {
  const secretNumber = generateRandom4DigitNumber();
  let attempts = 0;

  function processGuess(guessedNumber) {
    if (guessedNumber.length !== 4 || new Set(guessedNumber).size !== 4) {
      displayMessage(
        'Please enter a valid 4-digit number. Digits can\'t repeat.'
      );
      getUserInput('Enter your guess: ', processGuess);

      return;
    }

    attempts++;

    const result = calculateBullsAndCows(secretNumber, guessedNumber);

    displayMessage(
      `Attempt #${attempts}: Bulls: ${result.bulls}, Cows: ${result.cows}`
    );

    if (result.bulls === 4) {
      displayMessage(
        `Congratulations! You've guessed the number ${secretNumber}
        in ${attempts} attempts.`
      );
      closeInputOutput();
    } else {
      getUserInput('Enter your guess: ', processGuess);
    }
  }

  getUserInput('Enter your guess: ', processGuess);
}

main();
