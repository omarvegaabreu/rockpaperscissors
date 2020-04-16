"use strict";

//default values
const ROCK = "ROCK";
const PAPER = "PAPER";
const SCISSORS = "SCISSORS";
const DEFAULT_USER_CHOICE = ROCK;
const startGameBtn = document.getElementById("start-game-btn");
const RESULT_DRAW = "DRAW";
const RESULT_PLAYER_WINS = "PLAYER WINS";
const RESULT_COMPUTER_WINS = "COMPUTER WINS";
let gameIsRunning = false;

//sets player choice
const getPlayerChoice = () => {
  try {
    const selection = prompt(
      `${ROCK}, ${PAPER} or ${SCISSORS}?`,
      ""
    ).toUpperCase();
    if (selection !== ROCK && selection !== PAPER && selection !== SCISSORS) {
      alert(`Invalid choice! We chose ${DEFAULT_USER_CHOICE} for you!`);
      return;
    }
    return selection;
  } catch (error) {
    console.log("error", error);
  }
};

//evaluates who wins player or computer
const getWinner = (cChoice, pChoice = DEFAULT_USER_CHOICE) =>
  cChoice === pChoice
    ? RESULT_DRAW
    : (cChoice === PAPER && pChoice === SCISSORS) ||
      (cChoice === ROCK && pChoice === PAPER) ||
      (cChoice === SCISSORS && pChoice === ROCK)
    ? RESULT_PLAYER_WINS
    : RESULT_COMPUTER_WINS;

//sets computer choice
const getComputerChoice = () => {
  const randomSelection = Math.random();

  if (randomSelection < 0.34) {
    return ROCK;
  } else if (randomSelection < 0.67) {
    return PAPER;
  } else {
    return SCISSORS;
  }
};

startGameBtn.addEventListener("click", () => {
  const playerChoice = getPlayerChoice();
  const computerChoice = getComputerChoice();
  let winner;
  let message = `You picked: ${
    playerChoice || DEFAULT_USER_CHOICE
  }. Computer pick: ${computerChoice}. `;
  console.log("Game is running");

  //evaluate if playerChoice has value
  if (playerChoice) {
    winner = getWinner(computerChoice, playerChoice);
  } else {
    winner = getWinner(computerChoice, playerChoice); //default value will be set if !playerChoice
  }

  //if game is running prevents another game star
  if (gameIsRunning) {
    return;
  }

  gameIsRunning = true;
  //evaluate win or loose statement
  if (winner === RESULT_DRAW) {
    message = message + `It's a ${RESULT_DRAW}`;
  } else if (winner === RESULT_PLAYER_WINS) {
    message = message + `You ${RESULT_PLAYER_WINS}!`;
  } else {
    message = `You loose! ${RESULT_COMPUTER_WINS}!`;
  }

  alert(message);
  console.log(winner);
});
