
var romantics = {0 : {composer: "wagner",
                      image: "./assets/images/wagner.jpg"},
                 1 : {composer: "tchaikovsky",
                      image: "./assets/images/tchaikovsky.gif"},
                 2 : {composer: "beethoven",
                      image: "./assets/images/beethoven.jpg"},
                 3 : {composer: "brahms",
                      image: "./assets/images/brahms.jpg"},
                 4 : {composer: "verdi",
                      image: "./assets/images/verdi.jpg"},
                 5 : {composer: "schubert",
                      image: "./assets/images/schubert.jpg"},
                 6 : {composer: "mendelssohn",
                      image: "./assets/images/mendelssohn.jpg"},
                 7 : {composer: "mussorgsky",
                      image: "./assets/images/mussorgsky.jpg"},
                 8 : {composer: "strauss",
                      image: "./assets/images/strauss.jpg"},
                 9 : {composer: "puccini",
                       image: "./assets/images/puccini.jpg"},
                 10:  {composer: "dvorak",
                       image: "./assets/images/dvorak.jpg"},
                 11:  {composer: "berlioz",
                       image: "./assets/images/berlioz.jpg"},
                 12:  {composer: "mahler",
                       image: "./assets/images/mahler.jpg"},
                 13:  {composer: "grieg",
                       image: "./assets/images/grieg.jpg"}};
console.log(romantics);

var isGameOver = false;

var wins = 0;
console.log("# of wins: " + wins);
var winsText = document.getElementById("wins-text");
winsText.textContent = "Wins: " + wins;

var games = 0;
console.log("# of games played: " + games);
var gamesPlayed = document.getElementById("gamesPlayed-text");
gamesPlayed.textContent = "Games Played: " + games;

//WANT TO MAKE CODE JUMP TO HERE FOR EACH NEW GAME //
function playGame () {
    isGameOver = false;

    //Random word from array selected by randomly selecting number //
    var randNum = Math.floor(Math.random() * 14)
    var gameWord = romantics[randNum]["composer"];
    console.log("The word this game is: " + gameWord);

    document.getElementById("composer").src = romantics[randNum]["image"];

    //Creates _ _ _ _ in place of letters in word //
    var placeHolder = "_".repeat(gameWord.length);
    console.log(placeHolder);
    
    var placeHolderText = document.getElementById("placeholder-text");
    placeHolderText.textContent = placeHolder;

    var guessesRemaining = (gameWord.length + 5);
    console.log("Guesses remaining: " + guessesRemaining);

    var guessesRemainingText = document.getElementById("guessesRemaining-text");
    guessesRemainingText.textContent = "Guesses Remaining: " + guessesRemaining;

    var lettersGuessed = "";
    var lettersGuessedText = document.getElementById("lettersGuessed-text");
    lettersGuessedText.textContent = lettersGuessed;

    var gameEnd = "";
    var gameEndText = document.getElementById("gameEnd-text");
    gameEndText.textContent = gameEnd;

    // This Function replaces a specified character at a specified index in a string //
    String.prototype.setCharAt = function(idx,chr) {
        if (idx > this.length -1) {
            return this.toString();
        }
        else {
            return this.substr(0,idx) + chr + this.substr(idx+1);
        } 
    }

    document.onkeyup = function(event) {
        if(isGameOver&&event.key === "Enter"){
            playGame();
            return;
        }

        var userGuess = event.key;
        console.log("The player guessed " + userGuess);

        var x = lettersGuessed.includes(userGuess);
        console.log("This letter has been guessed before: " + x);

    // If letter has already been guessed we will do nothing!  Else
    // we will keep playing //
        if (x == false) {
    
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
                placeHolderText.textContent = placeHolder;
            }
            guessesRemaining = guessesRemaining - 1;
            console.log("Guesses remaining: " + guessesRemaining);
            guessesRemainingText.textContent = "Guesses Remaining: " + guessesRemaining;
        
            lettersGuessed = (lettersGuessed + userGuess);    
            console.log("Letters guessed: " + lettersGuessed);
            lettersGuessedText.textContent = lettersGuessed;
        
        }


        var finished = placeHolder.includes("_");
        if (finished === false) {
            var gameEnd = "You have won the game!!  Press Enter to play again";
            gameEndText.textContent = gameEnd;
            wins++;
            games++;
            winsText.textContent = "Wins: " + wins;
            gamesPlayed.textContent = "Games Played: " + games;
            console.log("Games played: " + games);
            console.log("Wins: " + wins);
            console.log("Press Enter to play again!");
            isGameOver = true;
        }
        if (guessesRemaining === 0) {
            var gameEnd = "You have lost!  You should try again!  Press Enter to play again";
            gameEndText.textContent = gameEnd;
            games += 1;
            gamesPlayed.textContent = "Games Played: " + games;
            console.log("Games played: " + games);
            console.log("Wins: " + wins);
            console.log("Press Enter to play again!");
            isGameOver = true;
        }

    };
};
playGame ();



