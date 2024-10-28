
let humanScore = 0;
let computerScore = 0;

// create getComputerChoice function name
// function returns the computer's selection with the use of Math.random
// Assign predetermined value ranges with random to rock paper or scissors
function getComputerChoice(){
    let randomGen = Math.floor(Math.random()*30);
    let compChoice;

    if (randomGen > 10 & randomGen <= 20){
        compChoice = "Rock";

    } else if (randomGen > 20){
        compChoice = "Paper";

    } else {

        compChoice = "scissors";
    }

    return compChoice;
}


// create function name for getHumanChoice
// create variable to store user's selection
// prompt user and save user's selection to the variable
// logic for caseinsensitive
function getHumanChoice(){
    // didnt set the initial string to null because I needed null values to be used for canceling the prompt() only.
    let usersInput = "Initial String";

    let i = 0;
    while (i == 0) {
        // this checks for user's ESC or closing the prompt
        if (usersInput === null) {
            return null;
        }
        // looks for rock, paper, scissors strings only. Will continue to prompt user until the strings are recognized or prompt cancelled.
        if (usersInput.toLowerCase() === "rock" || usersInput.toLowerCase() === "paper" || usersInput.toLowerCase() === "scissors") {
            return usersInput.toLowerCase();

        } else {
            usersInput = prompt(`Please Enter \"Rock\", \"Paper\" Or \"Scissors\" Only\nUser Score: ${humanScore}\nComp Score: ${computerScore}`);

        }

    } 
}



// create function to evaluate comp vs human selections called playRound
// playRound Function has two arguments: humanChoice and computerChoice.
// IF comp selection is greater than user's write to console "You lose! Paper Beats Rock" ELSE you win



function playRound(humanChoice, computerChoice) {

    // switch to evaluate user's selection vs comp
    switch(humanChoice) {
        // null case is used for catching prompt cancellation.
        case null:
            console.log("No User Selection");
            humanScore = null;
            break;
        
        case "rock":
            if (computerChoice === "scissors") {
                humanScore ++;
                console.log("You Win! Rock Beats Scissors");
            } else if (computerChoice === "Paper") {
                computerScore ++;
                console.log("You Lose! Paper Beats Rock");
            } else {
                console.log("Draw!");
            }
            break;
        
        case "paper":
            if (computerChoice === "Rock") {
                humanScore ++;
                console.log("You Win! paper Beats Rock");
            } else if (computerChoice === "scissors") {
                computerScore ++;
                console.log("You Lose! Scissors Beats Paper");
            } else {
                console.log("Draw!");
            }
            break;
        
        case "scissors":
            if (computerChoice === "Paper") {
                humanScore ++;
                console.log("You Win! Scissors Beat Paper");
            } else if (computerChoice === "Rock") {
                computerScore ++;
                console.log("You Lose! Rock Beats Scissors");
            } else {
                console.log("Draw!");
            }
            break;
    }
    
    // console.log(humanChoice, computerChoice);
}


function playGame() {
    
    // while loop runs while number of rounds is less than 5. 
    // null check for prompt cancellation. breaks out of loop if null.
    let roundNumber = 0;
    while (roundNumber < 5) {

        playRound(getHumanChoice(), getComputerChoice())
        if (humanScore === null) {
            break;
        }
        roundNumber++;
    }
    console.log(`User\'s Score: ${humanScore}`, `Computer\'s Score: ${computerScore}`);

}

playGame();

// displays final results based on final scores. 
// Ca
if (humanScore === null) {
    alert("The User Cancelled the Prompt")

} else if (computerScore > humanScore) {
    alert(`You Lose, Game Over!\nUser Score: ${humanScore}\nComp Score: ${computerScore}`);

} else if (humanScore > computerScore & humanScore !== null) {
    alert(`Congraduations! You Won!\nUser Score: ${humanScore}\nComp Score: ${computerScore}`);

} else {
    alert(`Draw!\nUser Score: ${humanScore}\nComp Score: ${computerScore}`);
}