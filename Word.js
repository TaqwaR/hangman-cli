var Letter = require("./Letters.js");
var guessCount = 0;

var Word = function(currentWord) {
  this.word = currentWord;
}

var wordLetters = new Word(Letter.letter);

//A function that returns a string representing the word. This should call the function on each letter object (the first function defined in `Letter.js`) that displays the character or an underscore and concatenate those together.

Word.prototype.wordString = function() {
  if (guessCount < guessCheck.length) {
    console.log(Letter.prototype.guessCheck());
    guessCount++
  }
};
