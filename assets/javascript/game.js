
var romantics = ["wagner","tchaikovsky","beethoven","brahms",
        "verdi","schubert","mendelssohn","mussorgsky","strauss",
        "puccini","dvorak","berlioz","mahler","grieg"];
console.log(romantics);

//Random word from array selected by randomly selecting number //
var gameWord = romantics[Math.floor(Math.random() * romantics.length)];
console.log("The word this game is: " + gameWord);

//Creates _ _ _ _ in place of letters in word //
var placeHolder = "_" * gameWord.length;
console.log(placeHolder);

var wins = 0;
console.log("# of wins: " + wins);

var games = 0;
console.log("# of games played: " + games);

var guessesRemaining = (gameWord.length + 5);
console.log("Guesses remaining: " + guessesRemaining);

var lettersGuessed = "";
// This Function replaces a specified character at a specified index in a string //
String.prototype.setCharAt = function(idx,chr) {
    if (idx > this.length -1) {
        return this.toString();
    }
    else {
        return this.substr(0,index) + chr + this.substr(index+1);
    } 
};

document.onkeyup = function(event) {
    var userGuess = event.key;
    console.log("The player guessed " + userGuess);

    //Seeing here if the guess is part of the word //
    var t = gameWord.includes(userGuess);
    console.log(userGuess + "is part of " + gameWord + ": " + t);

    var x = lettersGuessed.includes(userGuess);
    // If letter has already been guessed we will do nothing!  Else
    // we will keep playing //
    if (x = false) {
        lettersGuessed = (lettersGuessed + userGuess);    
        console.log("Letters guessed: " + lettersGuessed)
        if (t == true) {
            var index = [];
            for (i = 0; i < gameWord.length; i++) {
                if (gameWord[i] = userGuess) {
                    index.push(i);
                }
            }
            console.log("Letter guessed is in the word in these positions: " + index);
            for (j = 0; j < index.length; j++) {
                placeHolder = placeHolder.setCharAt(index[j],userGuess);
            }
            console.log("Placeholder is now: " + placeHolder);
        };
        guessesRemaining = guessesRemaining - 1;
        console.log("Guesses remaining: " + guessesRemaining);
    }
    var finished = placeHolder.includes("_");
    if (finished = false) {
        var gameEndText = "You have won the game!!";
        wins += 1;
        games += 1;
        
    }
    if (guessesRemaining = 0) {
        var gameEndText = "You have lost!  You should try again!";
        games += 1;
    }

};

