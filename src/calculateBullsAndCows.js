'use strict';

function calculateBullsAndCows(secretNumber, guessedNumber) {
  const secretDigits = secretNumber.split('');
  const guessedDigits = guessedNumber.split('');

  let bulls = 0;
  let cows = 0;

  for (let i = 0; i < secretDigits.length; i++) {
    if (secretDigits[i] === guessedDigits[i]) {
      bulls++;
    }

    if (secretDigits.includes(guessedDigits[i])) {
      cows++;
    }
  }

  return {
    bulls,
    cows,
  };
}

module.exports = {
  calculateBullsAndCows,
};
