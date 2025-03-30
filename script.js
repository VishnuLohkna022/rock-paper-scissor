let playerScore = 0;
let computerScore = 0;

const choices = document.querySelectorAll(".choice");

let msg = document.querySelector("#msg");


function getComputerChoice(){
    const choices = ["rock", "paper", "scissor"];
    const choicesId = Math.floor(Math.random() * 3);
    return choices[choicesId];
}

function win(flag, playerChoice, computerChoice){
    if (flag){
        msg.style.backgroundColor = "green";
        document.querySelector("#playerScore").innerHTML = ++playerScore;
        msg.innerHTML = `Player won! Player's ${playerChoice} beats Computer's ${computerChoice}`;
    }else{
        msg.style.backgroundColor = "red";
        document.querySelector("#computerScore").innerHTML = ++computerScore;
        msg.innerHTML = `Player lose! Computer's ${computerChoice} beats Player's ${playerChoice}`;
    }
}

function draw(){
    msg.style.backgroundColor = "gray";
    msg.innerHTML = "Match Draw! Play Again";
}

function playGame(playerChoice){
    const computerChoice  = getComputerChoice();
    if (playerChoice === computerChoice){
        draw();
    }
    else{
        let playerWin = true;
        if (playerChoice === "rock"){
            if (computerChoice === "paper"){
                playerWin = false;
            }
        }
        else if (playerChoice === "paper"){
            if (computerChoice === "scissor"){
                playerWin = false;
            }
        }
        else{
            if (computerChoice === "rock"){
                playerWin = false;
            }
        }

        win(playerWin, playerChoice, computerChoice);
    }
}

choices.forEach((choice)=>{
    choice.addEventListener('click', ()=>{
        let playerChoice = choice.getAttribute("id");
        playGame(playerChoice);
    })
})

