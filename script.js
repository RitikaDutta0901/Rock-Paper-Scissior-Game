let userScore=0;
let compScore=0;

let choices=document.querySelectorAll(".choice");

const playGame=(userChoice)=>{
    let options=["Rock","Paper","Scissior"];
    const randomIdx=Math.floor(Math.random()*3);
    let compChoice=options[randomIdx];
    console.log("Computer Choice:",compChoice);
    alert(compChoice);
    const msg1=document.querySelector("#btn");
    const res1=document.querySelector("#P1");
    const res2=document.querySelector("#P2");
    if(userChoice===compChoice){
        msg1.innerText="Game is Draw";
    }else{
        let userWin=true;
        if(userChoice==="Rock"){
            if(compChoice==="Paper"){
                msg1.innerText="Computer won";
                userWin=false;
                if(userWin===false){
                    compScore++;
                    res2.innerText=compScore;
                }
            }
            else if(compChoice==="Scissior"){
                msg1.innerText="You won";
                userWin=true;
                if(userWin===true){
                    userScore++;
                    res1.innerText=userScore;
                }
            }
        }
        if(userChoice==="Paper"){
            if(compChoice==="Rock"){
                msg1.innerText="You won";
                userWin=true;
                if(userWin===true){
                    userScore++;
                    res1.innerText=userScore;
                }
            }
            else if(compChoice==="Scissior"){
                msg1.innerText="Computer won";
                userWin=false;
                if(userWin===false){
                    compScore++;
                    res2.innerText=compScore;
                }
            }
        }
        if(userChoice==="Scissior"){
            if(compChoice==="Paper"){
                msg1.innerText="You won";
                userWin=true;
                if(userWin===true){
                    userScore++;
                    res1.innerText=userScore;
                }
            }
            else if(compChoice==="Rock"){
                msg1.innerText="Computer won";
                userWin=false;
                if(userWin===true){
                    compScore++;
                    res2.innerText=compScore;
                }
            }
        }
    }
}
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id")
        console.log("User Choice:",userChoice);
        playGame(userChoice);
    })
})