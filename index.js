
/* imports */

const prompt = require('prompt-sync')({sigint: true}); //signit: true allows user to exit with ctrl c




/*  ---- Required Functions ---- */ 


// function to ask user for choice & validate
function getUserInput(){

    // keep looping if no answer is provided or validation returns false
    const run = false;
    while (!run){
        // convert choice to lowercase for easier validation
        const choice = prompt(`Pick your weapon ${name}! Rock, Paper or Scissors?`).toLowerCase();
        if (choice){
            if (validateEntry(choice)){
                return choice;
                break;
            };
        };
    };

};

// validate that user entered one of rock, paper or scissors.
function validateEntry(choice){
    if (choice === 'rock' || choice === 'paper' || choice === 'scissors'){
        return true;
    } else {
        console.log('You can only choose rock, paper or scissors.')
        return false;
    };
};


// get the computers random choice
function getComputerChoice(){
    // store possible choices in array
    const possibleChoices = ['rock', 'paper', 'scissors']

    // math.random generates random number between the number of items in array. Math.floor changes float to integer
    // .length method provides the actual number of items in array
    const randomChoice = possibleChoices[Math.floor(Math.random() * possibleChoices.length)];
    console.log(`The computer chose ${randomChoice}.`)
    
    return randomChoice;
    
}


// determine which weapon choice wins and compare against user & comp choice to find a winner or a draw
function findAWinner (userChoice, compChoice){
    
    // initalise array
    const choices = []
    // add choices into array
    choices.push(userChoice)
    choices.push(compChoice)
    
    // determine which weapon choice wins
    if (choices.includes('scissors') && choices.includes('rock')){
        var win = 'rock';
    } else if (choices.includes('rock') && choices.includes('paper')){
        var win = 'paper';
    } else if (choices.includes('paper') && choices.includes('scissors')){
        var win = 'scissors';
    };


    // determine the winner
    if (userChoice == win){
        console.log(`############### \n Congratulations ${name}, you won! \n###############`);
    } else if (compChoice == win){
        console.log(`############### \n Unfortunately, the computer won. Boooo \n###############`);
    } else {
        console.log(`############### \n It's a draw. \n###############`);
    };
    
    
};



/* ---------------------------------- */




/* ---- Run program ---- */

// welcome message
console.log('Welcome To Rock Paper Scissors');

// prompt for users name
const name = prompt("What's your name?");


// get choices from user and computer
const userChoice = getUserInput();
const compChoice = getComputerChoice();


// pass choices into function to find a winner
findAWinner(userChoice, compChoice);

/* --------------------------------- */

