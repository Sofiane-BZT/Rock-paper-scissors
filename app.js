// Grabbing elements from the HTML
const computerChoiceDisplay = document.getElementById("computer-choice");
const userChoiceDisplay = document.getElementById("user-choice");
const resultDisplay = document.getElementById("result");
const possibleChoice = document.querySelectorAll("button");

// Declaring variables to store user, computer choices, and game result
let userChoice;
let computerChoice;
let result;

// Adding click event listeners to buttons
possibleChoice.forEach((possibleChoice) =>
  possibleChoice.addEventListener("click", (e) => {
    userChoice = e.target.id;

    //chek if the clicked choice is valid
    if (isValidChoice(userChoice)) {
      userChoiceDisplay.innerHTML = userChoice;
      // Generate computer's choice and determine game result
      generateComputerChoice();
      getResult();
    } else {
      console.log("invalid choice");
    }
  })
);

// function to validate user's choice
function isValidChoice(choice) {
  return choice === "rock" || choice === "paper" || choice === "scissors";
}

// Function to generate computer's choice
function generateComputerChoice() {
  // Generate a random number corresponding to a choice
  const randomNumber = Math.floor(Math.random() * possibleChoice.length) + 1;
  console.log(randomNumber);
  // Map the random number to a choice for the computer
  switch (randomNumber) {
    case 1:
      computerChoice = "rock";
      break;

    case 2:
      computerChoice = "scissors";
      break;

    case 3:
      computerChoice = "paper";
      break;

    default:
      console.log("error");
  }

  computerChoiceDisplay.innerHTML = computerChoice;
}
// Function to determine and display game result
function getResult() {
  if (computerChoice === userChoice) {
    result = "its a draw";
  } else if (
    // Conditions where the user wins
    (computerChoice === "rock" && userChoice === "paper") ||
    (computerChoice === "paper" && userChoice === "scissors") ||
    (computerChoice === "scissors" && userChoice === "rock")
  ) {
    result = "you win";
  } else if (
    // Conditions where the user lose
    (computerChoice === "rock" && userChoice === "scissors") ||
    (computerChoice === "paper" && userChoice === "rock") ||
    (computerChoice === "scissors" && userChoice === "paper")
  ) {
    result = "you lost";
  }
  resultDisplay.innerHTML = result;
}
