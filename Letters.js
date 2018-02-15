
//Global variables
const args = process.argv;
const letter = args[2];
var defaultLetter = "t";
let guesses = [];

//Constructor Base
const Letter = function(letter) {
  this.letter = letter;
  this.correctGuess = false;
}

//Constructor prototype #1
Letter.prototype.guessCheck = function(letter) {
    if (this.letter === defaultLetter) {
      this.correctGuess = true;
      console.log("correct guess!");
    }
};

//Constructor prototype #2
Letter.prototype.guess = function(letter) {

    if (this.correctGuess === true) {
      console.log(userLetter.letter);
      guesses.push(userLetter.letter);
    } else {
      console.log("_");
      guesses.push("_")
    }
};

//New contructed variable
let userLetter = new Letter(letter);

//Calling prototype methods on new constructed variable
userLetter.guessCheck();
userLetter.guess();

console.log(defaultLetter);
