function getComputerChoice(){
    // Randomly generate the computers choice
    // Returning 'Rock', 'Paper' or 'Scissors'

    let choice = Math.floor( Math.random() * 3 );

    if(choice === 0){
        return "ROCK";
    } else if(choice === 1){
        return "PAPER";
    } else {
        return "SCISSORS";
    }

}

/* function getHumanChoice(){
    // Get user input and validate

    let choice = prompt("Enter your choice: 'Rock' | 'Paper' | 'Scissors'");
    choice = choice.toUpperCase();

    while((choice != 'ROCK') && (choice != 'PAPER') && (choice != 'SCISSORS')){
        choice = prompt("Invalid input. Please enter 'Rock', 'Paper' or 'Scissors'");
        choice = choice.toUpperCase();
    }

    return choice;

} */

function playRound(HumanChoice, ComputeChoice){
    // Compare choices

    const results = document.querySelector('.results');


    if(HumanChoice === 'ROCK'){
        if(ComputeChoice === 'SCISSORS'){
            console.log('You win! Rock beats Scissors.');
            humanScore++;
        } else if(ComputeChoice === 'PAPER'){
            console.log('You lose! Paper beats Rock.');
            computerScore++;
        } else {
            console.log("It's a tie! Both choose Rock!");
            ties++;
        }
    } else if (HumanChoice === 'PAPER'){
        if(ComputeChoice === 'ROCK'){
            console.log('You win! Paper beats Rock.');
            humanScore++;
        } else if(ComputeChoice === 'SCISSORS'){
            console.log('You lose! Scissors beats Paper.');
            computerScore++;
        } else {
            console.log("It's a tie! Both choose Paper!");
            ties++;
        }
    } else { // Choose Scissors
        if(ComputeChoice === 'PAPER'){
            console.log('You win! Scissors beats Paper.');
            humanScore++;
        } else if(ComputeChoice === 'Rock'){
            console.log('You lose! Rock beats Paper.');
            computerScore++;
        } else {
            console.log("It's a tie! Both choose Scissors!");
            ties++;
        }
    }
}

/* function playGame(){

    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();

    playRound(humanSelection, computerSelection);

    console.log("--- Scores ---");
    console.log("You: " + humanScore);
    console.log("Computer: " + computerScore);
    console.log("Ties: " + ties);

} */


const container = document.querySelector(".container");

container.addEventListener("click", (event) => {

    let humanSelection = event.target.id;
    humanSelection = humanSelection.toUpperCase();
    const computerSelection = getComputerChoice();

    playRound(humanSelection, computerSelection);
});

// Variables for tracking the score
let humanScore = 0;
let computerScore = 0;
let ties = 0;

// playGame();
