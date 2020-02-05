
/* imports */

const prompt = require('prompt-sync')({sigint: true}); //signit: true allows user to exit with ctrl c




/*  ---- Required Functions ---- */ 

function validateEntry(choice){
    if (choice === 'rock' || choice === 'paper' || choice === 'scissors'){
        return true;
    } else {
        console.log('You can only choose rock, paper or scissors.')
        return false;
    };
};

function getComputerChoice(){
    // store choices in array
    const compChoices = ['rock', 'paper', 'scissors']

    // math.random generates random number between the number of items in array. Math.floor changes float to integer
    // .length method provides the actual number of items in array
    const randomChoice = compChoices[Math.floor(Math.random() * compChoices.length)];

    return randomChoice;
    
}

/* ---------------------------------- */



/* ---- program ---- */

// welcome message
//console.log('Welcome To Rock Paper Scissors');

// prompt for users name
//const name = prompt("What's your name?");

// function to ask user for choice & validate
function getUserInput(){

    // keep looping if no answer is provided
    const run = false;
    while (!run){
        // convert choice to lowercase for easier validation
        const choice = prompt(`Pick your weapon! Rock, Paper or Scissors?`).toLowerCase();
        if (choice){
            if (validateEntry(choice)){
                return choice;
                break;
            }
        }
    }

};


// get choices
const userChoice = getUserInput();
const compChoice = getComputerChoice();







