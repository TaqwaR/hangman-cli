const Letter = require("./Letters.js");


let Word = function(currentWord) {
  this.word = currentWord;
  this.wordLetters = [];
}


Word.prototype.toString = function() {
  console.log(Letter.guesses);
};
