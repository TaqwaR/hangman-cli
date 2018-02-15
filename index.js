const inquirier = require("inquirer");
const Word = require('Word.js');
const beeWords = [];
const randomNum = Math.floor(Math.random() * beeWords.length);
const randomWord = beeWords[randomNum].toUpperCase();

const allowedAttempts = 10;
let guessCount = 0;
