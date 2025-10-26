function getComputerChoice(){
    const randomNumber = Math.random();

    if (randomNumber <= 0.33){
        return "Pedra";
    }
    else if (randomNumber <= 0.66){
        return "Papel";
    }
    else{
        return "Tesoura";
    }
}

function getHumanChoice(){
    let userChoice = prompt("Qual a sua escolha? (Pedra, Papel, ou Tesoura)?")
    return userChoice;
}

function playGame(){
    let humanScore =0;
    let computerScore=0;
    let humanSelection;
    let computerSelection;
 
 
    function playRound(HumanChoice,ComputerChoice){
    const human= HumanChoice.toLowerCase();
    const computer= ComputerChoice.toLowerCase();
    if (
        human === computer){
            console.log(`Empate! Os dois escolheram ${computer}`);
    }
    else if(
        (human === "pedra" && computer === "tesoura") ||
        (human === "papel" && computer === "pedra") ||
        (human === "tesoura" && computer ==="papel")){
            humanScore++;
            console.log(`Você venceu! ${human} ganha de ${computer}.`)
            }
    else{
        computerScore++;
        console.log(`Você perdeu! ${computer} ganha de ${human}.`)
    }

}

    if (humanScore > computerScore){
        console.log("Você venceu!")
    }
    else if(computerScore > humanScore){
        console.log("Você perdeu!")
    }
    else{
        console.log("O jogo terminou em Empate!")
    }
}

playGame();