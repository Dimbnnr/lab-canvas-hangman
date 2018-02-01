var hangman;

 function Hangman() {
this.words = ['Ironhack','Bliss','Jquery'];
this.secretWord = "";
this.letters = [];

}

Hangman.prototype.getWord = function () {

var randomNumber = Math.floor(Math.random()*this.words.length);
console.log(randomNumber)
return this.words[randomNumber];
};

Hangman.prototype.checkIfLetter = function (keyCode) {
if(keyCode>= 65 && keyCode <= 90){
  return true;
} else {
  return false; // adentro del if porque comprobamos una letra
}
};

Hangman.prototype.checkClickedLetters = function (key) {
  // console.log(this.letters);
this.letters.forEach(function(e){
 console.log(key == e)
 if(key === e){
   return false
 }else{
   
 }
})
return true // estamos a fuera del this. letters.forEach,   a fuera del if, porque si esta adentro del if, JS no hara recorrido el TODO el array  
// 

};

Hangman.prototype.addCorrectLetter = function (i) {

};

// Hangman.prototype.addWrongLetter = function (letter) {

// };

// Hangman.prototype.checkGameOver = function () {

// };

// Hangman.prototype.checkWinner = function () {

// };

document.getElementById('start-game-button').onclick = function () {
  hangman = new Hangman();
};


document.onkeydown = function (e) {

};
