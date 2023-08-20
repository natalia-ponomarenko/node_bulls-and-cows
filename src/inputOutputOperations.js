'use strict';

const readline = require('readline');

const terminal = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function getUserInput(prompt, callback) {
  terminal.question(prompt, (answer) => {
    callback(answer);
  });
}

function displayMessage(message) {
  // eslint-disable-next-line no-console
  console.log(message);
}

function closeInputOutput() {
  terminal.close();
}

module.exports = {
  getUserInput,
  displayMessage,
  closeInputOutput,
};
