

// create getComputerChoice function name
// function returns the computer's selection with the use of Math.random
// Assign predetermined value ranges with random to rock paper or scissors
function getComputerChoice(){
    let randomGen = Math.floor(Math.random()*30);
    let compChoice;
    //console.log(randomGen);
    if(randomGen > 10 & randomGen <= 20){
        compChoice = "Rock";
    }
    else if(randomGen >= 21){
        compChoice = "Scissors";
    }
    else{
        compChoice = "Paper";
    }

    return compChoice;
}

//console.log(getComputerChoice());

// create function name for getHumanChoice
// create variable to store user's selection
// prompt user and save user's selection to the variable
// logic for caseinsensitive


// create function to evaluate comp vs human selections called playRound
// playRound Function has two arguments: humanChoice and computerChoice.
// IF comp selection is greater than user's write to console "You lose! Paper Beats Rock" ELSE you win
