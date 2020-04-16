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
  const selection = prompt(
    `${ROCK}, ${PAPER} or ${SCISSORS}?`,
    ""
  ).toUpperCase();
  if (selection !== ROCK && selection !== PAPER && selection !== SCISSORS) {
    alert(`Invalid choice! We chose ${DEFAULT_USER_CHOICE} for you!`);
    return DEFAULT_USER_CHOICE;
  }
  return selection;
};

const getWinner = (cChoice, pChoice) => {
  if (cChoice === pChoice) {
    return RESULT_DRAW;
  } else if (
    (cChoice === PAPER && pChoice === SCISSORS) ||
    (cChoice === ROCK && pChoice === PAPER) ||
    (cChoice === SCISSORS && pChoice === ROCK)
  ) {
    return RESULT_PLAYER_WINS;
  } else {
    return RESULT_COMPUTER_WINS;
  }
};

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
  const winner = getWinner(computerChoice, playerChoice);

  if (gameIsRunning) {
    return;
  }
  gameIsRunning = true;
  console.log("start game");

  console.log(winner);
});
