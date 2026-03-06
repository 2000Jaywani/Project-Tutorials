let userScore=0;
let computerScore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");

const userScorepara=document.querySelector("#user-score");

const compScorepara=document.querySelector("#comp-score");

const generatCompchoice =()=>{
    const options =["rock" , "paper", "scissors"];
    const randIdx =Math.floor(Math.random() * 3);
    return options[randIdx];

}

const drawGame=()=>{
    console.log("Game is Draw.");
    msg.innerText="Game was Draw play again !";
    msg.style.backgroundColor="blue";
}

const showWinner=(userWin, userChoice, compChoice)=>{
    if(userWin){
        userScore++;
        userScorepara.innerText=userScore;
        console.log("You Win Game.");
        msg.innerText=`You win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";
    }
    else{
        compScore++;
        compScorepara.innerText=compScore;
        console.log("You Loose Game.");
        msg.innerText=`You lose!  ${compChoice} beats Your ${userChoice}`;    
        //msg.innerText="You Loose";
        msg.style.backgroundColor="red";
    }
}

//Math.random();          to generate any decimal numbers     
// Math.floor(Math.random() * 10)    to generate numbers 0 to 10

const playGame=(userChoice)=>{

    console.log("user choice = ",userChoice);
    //generate computer choice.---modular
    const compChoice= generatCompchoice();
    console.log("comp choice = ", compChoice);

    if(userChoice===compChoice){
        drawGame();
    }
    else
    {
        let userWin=true;
        if(userChoice==="rock")
        {
            userWin=compChoice==="paper" ? false:true;
        }
        else if(userChoice==="paper")
        {
            userWin=compChoice==="scissors" ? false:true;
        }
        else
        {
            userWin=compChoice==="rock" ? false:true;
        }
        showWinner(userWin, userChoice, compChoice);
    }

};
choices.forEach((choice)=>{
    console.log(choice)
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        // console.log("choice was clicked  = ",userChoice);
        playGame(userChoice);
    })
})