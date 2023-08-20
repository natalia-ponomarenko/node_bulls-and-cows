'use strict';

function generateRandom4DigitNumber() {
  const digits = [];

  while (digits.length < 4) {
    const digit = Math.floor(Math.random() * 10);

    if (!digits.includes(digit)) {
      digits.push(digit);
    }
  }

  return digits.join('');
}

module.exports = {
  generateRandom4DigitNumber,
};
