'use strict';
// universal variable for making a count of correct answers.
var correctAnswerCount = 0;

// greeting using user's name input
function askForName() {
    var userName = prompt('Hey! What\'s your name?');
    alert('Welcome to my About Me page, ' + userName);
    console.log('This user\'s name is: ' + userName); 
}

askForName();

// first question
var myPets = prompt('Do I have pets?');

function guessMyPets(){
    if(myPets.toLowerCase() === 'yes' || myPets.toLowerCase() === 'y'){
        alert('you are correct!');
        correctAnswerCount++;
        //     console.log('you are correct!');
    } else {
        alert('ooops wrong!');
        //      console.log('ooops wrong!');
    } 
}
guessMyPets();

// second question
var myGradYear = prompt('Was my highschool graduation year 2016?');
function guessMyGradYear(){
    if(myGradYear.toLowerCase() === 'no' || myGradYear.toLowerCase() === 'n'){
        alert('you are correct!');
        correctAnswerCount++;
        //     console.log('you are correct!');
    } else {
        alert('ooops wrong!');
        //     console.log('ooops wrong!');
    } 
}
guessMyGradYear();
// third question
var myHomeTown = prompt('Did I grow up on Long Island?');
function guessMyHomeTown(){
    if(myHomeTown.toLowerCase() === 'yes' || myHomeTown.toLowerCase() === 'y'){
        alert('you are correct!');
        correctAnswerCount++;
        //     console.log('you are correct!');
    } else {
        alert('ooops wrong!');
        //     console.log('ooops wrong!');
    }  
}
guessMyHomeTown();
// fourth question
var jobBackground = prompt('Did I used to work in accounting?');
function guessJobBackground(){
    if(jobBackground.toLowerCase() === 'no' || jobBackground.toLowerCase() === 'n'){
        alert('you are correct!');
        correctAnswerCount++;
        //     console.log('you are correct!');
    } else {
        alert('ooops wrong!');
            //     console.log('ooops wrong!');
    } 
}
guessJobBackground();
// number guessing question

var correctNumber = 7;
function tellUserLastChanceGuess(){
    alert('sorry! you are out of chances');
}
function correctUserGuess(){
   
        alert('Ay! You got it!');
}
function checkUsersGuess(){
    var i = 0;
while (i < 4){ 
    var userGuess = prompt ('Guess a number between 1 and 10');
   if (parseInt(userGuess) === correctNumber) {
            alert('Ay! You got it!');
            break;
            correctAnswerCount++;
            }
            else if (parseInt(userGuess) > correctNumber) {
                alert('close, but lower!');
                i++;
            } 
            else if (parseInt(userGuess) < correctNumber) {
                alert('close, but higher!');
                i++;
            }
            else if (parseInt(userGuess) !== correctNumber && (i === 3)) { 
                tellUserLastChanceGuess();
            }
        }
    
}
checkUsersGuess();

// question with multiple correct answers
var tenFavoriteGames = new Array('eso', 'mariokart', 'animal crossing', 'outer worlds', 'pokemon: yellow', 'super mario sunshine', 'pokemon stadium', 'skyrim', 'mario odyssy', 'pokemon snap');

var guesses = 0;
var maxGuesses = 6;
var isAnswerCorrect = false;
function guessFavoriteGame(){
while (!isAnswerCorrect && guesses < maxGuesses){
   
    var userAnswer = prompt('Name one of my favorite video games!');

    for (var i = 0; i < tenFavoriteGames.length; i++) {
        if (userAnswer.toLowerCase() === tenFavoriteGames[i]){
            alert('You got one!');
            isAnswerCorrect = true;
            correctAnswerCount++;
            break;
        } else if (i === tenFavoriteGames.length - 1) {
            alert('That one is cool too, just not in the top 10!');
        }
    } 
    guesses++;
}

if (!isAnswerCorrect) {
    alert('You\'re out of guesses, sorry!');
}
}
guessFavoriteGame();
alert('You have gotten ' + correctAnswerCount + ' answer(s) correct out of 7!');