const choiceButtons = document.querySelectorAll(".choice");
const logDiv = document.querySelector("#log");
const playerScoreSpan = document.querySelector("#player-score");
const computerScoreSpan = document.querySelector("#computer-score");
const buttonContainer = document.querySelector("#buttons");

let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  const randomNumber = Math.random();

  if (randomNumber <= 0.33) {
    return "Pedra";
  } else if (randomNumber <= 0.66) {
    return "Papel";
  } else {
    return "Tesoura";
  }
}

function playRound(HumanChoice, ComputerChoice) {
  const human = HumanChoice.toLowerCase();
  const computer = ComputerChoice.toLowerCase();

  if (human === computer) {
    console.log(`Empate! Os dois escolheram ${computer}`);
    logDiv.textContent = `Empate! Os dois escolheram ${computer}.`;
  } else if (
    (human === "pedra" && computer === "tesoura") ||
    (human === "papel" && computer === "pedra") ||
    (human === "tesoura" && computer === "papel")
  ) {
    humanScore++;
    logDiv.textContent = `Você venceu! ${human} ganha de ${computer}.`;
    console.log(`Você venceu! ${human} ganha de ${computer}.`);
  } else {
    computerScore++;
    logDiv.textContent = `Você perdeu! ${computer} ganha de ${human}.`;
    console.log(`Você perdeu! ${computer} ganha de ${human}.`);
  }
}
function anunciarVencedor() {
  if (humanScore === 5) {
    logDiv.textContent = "Parabéns, você venceu a partida!";
  } else {
    logDiv.textContent = "Você perdeu a partida!";
  }
}

function substituirBotoes() {
  buttonContainer.innerHTML =
    '<button id ="resetButton">Jogar Novamente?</button>';
  const resetButton = document.querySelector("#resetButton");
  resetButton.addEventListener("click", () => {
    location.reload();
  });
}
choiceButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const humanSelection = button.value;
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
    playerScoreSpan.textContent = `Jogador: ${humanScore}`;
    computerScoreSpan.textContent = `Computador: ${computerScore}`;
    if ((humanScore === 5) | (computerScore === 5)) {
      anunciarVencedor();
      substituirBotoes();
    }
  });
});
