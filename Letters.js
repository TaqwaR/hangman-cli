
//Global variables
var args = process.argv;
var letter = args[2];
var defaultLetter = "t";

//Constructor Base
var Letter = function(letter) {
  this.letter = letter;
  this.correctGuess = false;
}

//Constructor prototype #1
Letter.prototype.guessCheck = function(letter) {
    if (this.letter === defaultLetter) {
      this.correctGuess = true;
    }
};

//Constructor prototype #2
Letter.prototype.guess = function(letter) {
    if (this.correctGuess === true) {
      console.log(userLetter.letter);
    } else {
      console.log("_");
    }
};

//New contructed variable
var userLetter = new Letter(letter);

//Calling prototype methods on new constructed variable
userLetter.guessCheck();
userLetter.guess();

console.log(defaultLetter);
