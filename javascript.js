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

    const results = document.querySelector('#round-result');
    //const points = Array.from(document.querySelectorAll("p")); // Index 0 is Human, index 1 is Computer
    const points = document.querySelectorAll("p"); // Index 0 is Human, index 1 is Computer

    if(HumanChoice === 'ROCK'){
        if(ComputeChoice === 'SCISSORS'){
            console.log('You win! Rock beats Scissors.');
            humanScore++;
            
            if(results.classList.contains("lose")){
                results.classList.toggle("lose"); // Desactiva lose
                results.classList.toggle("win"); // Activa win
            }
            
            results.textContent = 'You win! Rock beats Scissors.';
            points[0].textContent = humanScore;

        } else if(ComputeChoice === 'PAPER'){
            console.log('You lose! Paper beats Rock.');
            computerScore++;

            if(results.classList.contains("win")){
                results.classList.toggle("lose"); // Activa lose
                results.classList.toggle("win"); // Desctiva win
            }
            
            results.textContent = 'You lose! Paper beats Rock.';
            points[1].textContent = computerScore;

        } else {
            console.log("It's a tie! Both choose Rock!");
            ties++;

            results.textContent = "It's a tie! Both choose Rock!";

        }
    } else if (HumanChoice === 'PAPER'){
        if(ComputeChoice === 'ROCK'){
            console.log('You win! Paper beats Rock.');
            humanScore++;

            if(results.classList.contains("lose")){
                results.classList.toggle("lose"); // Desactiva lose
                results.classList.toggle("win"); // Activa win
            }
            
            results.textContent = 'You win! Paper beats Rock.';
            points[0].textContent = humanScore;

        } else if(ComputeChoice === 'SCISSORS'){
            console.log('You lose! Scissors beats Paper.');
            computerScore++;

            if(results.classList.contains("win")){
                results.classList.toggle("lose"); // Activa lose
                results.classList.toggle("win"); // Desctiva win
            }
            
            results.textContent = 'You lose! Scissors beats Paper.';
            points[1].textContent = computerScore;

        } else {
            console.log("It's a tie! Both choose Paper!");
            ties++;

            results.textContent = "It's a tie! Both choose Paper!";

        }
    } else { // Choose Scissors
        if(ComputeChoice === 'PAPER'){
            console.log('You win! Scissors beats Paper.');
            humanScore++;

            if(results.classList.contains("lose")){
                results.classList.toggle("lose"); // Desactiva lose
                results.classList.toggle("win"); // Activa win
            }
            
            results.textContent = 'You win! Scissors beats Paper.';
            points[0].textContent = humanScore;

        } else if(ComputeChoice === 'Rock'){
            console.log('You lose! Rock beats Paper.');
            computerScore++;

            if(results.classList.contains("win")){
                results.classList.toggle("lose"); // Activa lose
                results.classList.toggle("win"); // Desctiva win
            }
            
            results.textContent = 'You lose! Rock beats Paper.';
            points[1].textContent = computerScore;

        } else {
            console.log("It's a tie! Both choose Scissors!");
            ties++;

            results.textContent = "It's a tie! Both choose Scissors!";

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
