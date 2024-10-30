let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg")
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score")


const genCompChoice = () => {
    const options = ["rock" , "paper" , "scissors"]

    const randIdx = Math.floor(Math.random()*3);
    return options[randIdx];
}

const draw =() =>{
    console.log("Game is Draw")
    msg.innerText = "Game Was Draw. Play Again"
    msg.style.backgroundColor = "#081b31"
}

const showWinner = (userWin,compChoice,userChoice) =>{

    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You Win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green"
    }else{
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `You lost!  ${compChoice} beats your ${compChoice}`;
        msg.style.backgroundColor = "red"
    }
    
}
const playGame = (userChoice) =>{
    let userWin = true;
    console.log("User choice = ",userChoice)
    const compChoice = genCompChoice()
    console.log("Comp choice = ",compChoice)
    if(userChoice ===compChoice){
        // Draw
        draw();
                
    }else{

        if(userChoice ==="rock"){
            // scissor , paper
            userWin =  compChoice==="paper" ? false : true;

        }else if(userChoice ==="paper"){
            userWin = compChoice ==="scissors" ? false :true;

        }
        else{
            userWin = compChoice==="rock" ? false :true;
        }
        showWinner(userWin,userChoice,compChoice)
    }
    
}



choices.forEach((choices) => {
  choices.addEventListener("click", () => {
    const userChoice = choices.getAttribute("id");
    playGame(userChoice);
  });
});
