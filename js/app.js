'use strict';
// universal variable for making a count of correct answers.

function keepScore(){
    var correctAnswerCount = 0; 
    console.log('This is the score ' + correctAnswerCount );
}

keepScore();


// greeting using user's name input
var userName = prompt('Hey! What\'s your name?')
    alert('Welcome to my About Me page, ' + userName);
    console.log('This user\'s name is: ' + userName);
// first question
var myPets = prompt('Do I have pets?')


if(myPets.toLowerCase() === 'yes' || myPets.toLowerCase() === 'y'){
    alert('you are correct!');
    correctAnswerCount++;
    //     console.log('you are correct!');
} else {
    alert('ooops wrong!');
    //     console.log('ooops wrong!');
}

// second question
var myGradYear = prompt('Was my highschool graduation year 2016?')

if(myGradYear.toLowerCase() === 'no' || myGradYear.toLowerCase() === 'n'){
    alert('you are correct!');
    correctAnswerCount++;
    //     console.log('you are correct!');
} else {
    alert('ooops wrong!');
    //     console.log('ooops wrong!');
}

// third question
var myHomeTown = prompt('Did I grow up on Long Island?')

if(myHomeTown.toLowerCase() === 'yes' || myHomeTown.toLowerCase() === 'y'){
    alert('you are correct!');
    correctAnswerCount++;
    //     console.log('you are correct!');
} else {
    alert('ooops wrong!');
    //     console.log('ooops wrong!');
}

// fourth question
var jobBackground = prompt('Did I used to work in accounting?')

if(jobBackground.toLowerCase() === 'no' || jobBackground.toLowerCase() === 'n'){
    alert('you are correct!');
    correctAnswerCount++;
    //     console.log('you are correct!');
} else {
    alert('ooops wrong!');
        //     console.log('ooops wrong!');
}
// number guessing question
var correctNumber = 7;
for (var i = 0; i < 4; i++){
    var userGuess = prompt ('Guess a number between 1 and 10');
    if((i === 3) && (correctNumber !== parseInt(userGuess))) {
        alert('sorry! you are out of chances');
        break;
    }
    else if (parseInt(userGuess) === correctNumber) {
        alert('Ay! You got it!');
        break;
        correctAnswerCount++;
    }
    else if (parseInt(userGuess) > correctNumber) {
        alert('close, but lower!');
    } 
    else if (parseInt(userGuess) < correctNumber) {
        alert('close, but higher!');
    }
}
// question with multiple correct answers
var tenFavoriteGames = new Array('eso', 'mariokart', 'animal crossing', 'outer worlds', 'pokemon: yellow', 'super mario sunshine', 'pokemon stadium', 'skyrim', 'mario odyssy', 'pokemon snap');

var guesses = 0;
var maxGuesses = 6;
var isAnswerCorrect = false;

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

alert('You have gotten ' + correctAnswerCount + ' answer(s) correct out of 7!');