const result = document.querySelector(".result")
const humanScore = document.getElementById("human-score")
const machineScore = document.getElementById("machine-score")

let humanScoreNumber = 0
let machineScoreNumber = 0

const GAME_OPTIONS = {
    ROCK: "rock",
    PAPER: "paper",
    SCISSORS: "scissors"
}

/*
    ENUM, em casos de programas muito grande, o ENUM é de grande ajuda, pois caso algum dos nomes saiam errado, 
    ou seja necessário mudar um dos nomes do programa, ao invés de mudar um por um, 
    o ENUM é uma variável que você guarda esses nomes, e depois coloca ela no programa, que já substitui os nomes, 
    assim reduz bastante a chance de erros.
    A váriavel é em maiúsculo com _ separando as palavras
*/

const playHuman = (humanChoice) => {
    playTheGame(humanChoice, playMachine())
}

const playMachine = () => {
    const choices = [GAME_OPTIONS.ROCK, GAME_OPTIONS.PAPER, GAME_OPTIONS.SCISSORS]
    const randomNumber = Math.floor(Math.random() * 3)
    console.log(randomNumber)

    return choices[randomNumber]
}

const playTheGame = (human, machine) => {
    console.log("Humano: " + human, "Máquina: " + machine)

    if (human === machine) {
        result.innerHTML = "Empate!"
    }
    else if (
        (human === GAME_OPTIONS.ROCK && machine === GAME_OPTIONS.SCISSORS) ||
        (human === GAME_OPTIONS.PAPER && machine === GAME_OPTIONS.ROCK) ||
        (human === GAME_OPTIONS.SCISSORS && machine === GAME_OPTIONS.PAPER)
    ) {
        humanScoreNumber++
        humanScore.innerHTML = humanScoreNumber
        result.innerHTML = "Você ganhou!"
    }

    else {
        machineScoreNumber++
        machineScore.innerHTML = machineScoreNumber
        result.innerHTML = "Você perdeu!"
    }
}