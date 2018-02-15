const Letter = require("./Letters.js");
const allowedAttempts = 10;
let guessCount = 0;

let Word = function(currentWord) {
  this.word = currentWord;
}

let wordLetters = new Word(Letter.letter);

//A function that returns a string representing the word. This should call the function on each letter object (the first function defined in `Letter.js`) that displays the character or an underscore and concatenate those together.

Word.prototype.wordString = function() {
  console.log(Letter.guesses);
};
