
var romantics = ["wagner","tchaikovsky","beethoven","brahms",
        "verdi","schubert","mendelssohn","mussorgsky","strauss",
        "puccini","dvorak","berlioz","mahler","grieg"];
console.log(romantics);

var wins = 0;
console.log("# of wins: " + wins);

var games = 0;
console.log("# of games played: " + games);

//WANT TO MAKE CODE JUMP TO HERE FOR EACH NEW GAME //
function playGame () {

//Random word from array selected by randomly selecting number //
    var gameWord = romantics[Math.floor(Math.random() * romantics.length)];
    console.log("The word this game is: " + gameWord);

//Creates _ _ _ _ in place of letters in word //
    var placeHolder = "_".repeat(gameWord.length);
    console.log(placeHolder);

    var guessesRemaining = (gameWord.length + 5);
    console.log("Guesses remaining: " + guessesRemaining);

    var lettersGuessed = "";
// This Function replaces a specified character at a specified index in a string //
    String.prototype.setCharAt = function(idx,chr) {
        if (idx > this.length -1) {
            return this.toString();
        }
        else {
            return this.substr(0,idx) + chr + this.substr(idx+1);
        } 
    };

    document.onkeyup = function(event) {
        var userGuess = event.key;
        console.log("The player guessed " + userGuess);

        var x = lettersGuessed.includes(userGuess);
        console.log("This letter has been guessed before: " + x);
    // If letter has already been guessed we will do nothing!  Else
    // we will keep playing //
        if (x == false) {
            guessesRemaining = guessesRemaining - 1;
            console.log("Guesses remaining: " + guessesRemaining);
        
            lettersGuessed = (lettersGuessed + userGuess);    
            console.log("Letters guessed: " + lettersGuessed)
    
        //Seeing here if the guess is part of the word //
            var t = gameWord.includes(userGuess);
            console.log(userGuess + " is part of " + gameWord + ": " + t);
            if (t == true) {
                let index = [];
                for (i = 0; i < gameWord.length; i++) {
                    if (gameWord[i] === userGuess) {
                        index.push(i);
                    }
                }
                console.log("Letter guessed is in the word in these positions: " + index);
                for (j = 0; j < index.length; j++) {
                    placeHolder = placeHolder.setCharAt(index[j],userGuess);
                }
                console.log("Placeholder is now: " + placeHolder);
            }
        
        }
        var finished = placeHolder.includes("_");
        if (finished === false) {
            var gameEndText = "You have won the game!!  Press Enter to play again";
            wins += 1;
            games += 1;
            console.log("Games played: " + games);
            console.log("Wins: " + wins);
            console.log("Press Enter to play again!");
            if (userGuess === "Enter") {
                playGame();
            }
        }
        if (guessesRemaining === 0) {
            var gameEndText = "You have lost!  You should try again!  Press Enter to play again";
            games += 1;
            console.log("Games played: " + games);
            console.log("Wins: " + wins);
            console.log("Press Enter to play again!");
            if (userGuess === "Enter") {
                playGame();
            }
        }
    };
};
playGame ();



