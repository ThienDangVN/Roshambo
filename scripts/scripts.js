

// create getComputerChoice function name
// function returns the computer's selection with the use of Math.random
// Assign predetermined value ranges with random to rock paper or scissors
function getComputerChoice(){
    let randomGen = Math.floor(Math.random()*30);
    let compChoice;
    //console.log(randomGen);
    if (randomGen > 10 & randomGen <= 20){
        compChoice = "Rock";

    } else if (randomGen > 20){
        compChoice = "Paper";

    } else {

        compChoice = "scissors";
    }

    return compChoice;
}

//console.log(getComputerChoice());

// create function name for getHumanChoice
// create variable to store user's selection
// prompt user and save user's selection to the variable
// logic for caseinsensitive
function getHumanChoice(){
    // didnt set the initial string to null because I needed null values to be used for canceling the prompt() only.
    let humanChoice = "Initial String";

    let i = 0;
    while (i == 0) {
        // this checks for user's ESC or closing the prompt
        if (humanChoice === null) {
            console.log("user canceled the prompt")
            return null;
        }
        // looks for rock, paper, scissors strings only. Will continue to prompt user until the strings are recognized or prompt cancelled.
        if (humanChoice.toLowerCase() === "rock" || humanChoice.toLowerCase() === "paper" || humanChoice.toLowerCase() === "scissors") {
            i = 1;
            return humanChoice.toLowerCase();

        } else {
            humanChoice = prompt();

        }
    } 
}


// create function to evaluate comp vs human selections called playRound
// playRound Function has two arguments: humanChoice and computerChoice.
// IF comp selection is greater than user's write to console "You lose! Paper Beats Rock" ELSE you win
