const rockbtn = document.getElementById("rock");
const paperbtn = document.getElementById("paper");
const scissorbtn = document.getElementById("scissor");
let display = document.getElementById("display-bar");
let ascore = 0;
let bscore = 0;

function randomgenerator(){
    const res = ["Rock","Paper","Scissor"];
    let s = Math.round(Math.random() * 2)
    document.getElementById("player2-value").textContent = `Computer: ${res[s]}`;
    console.log(res[s]);
    return res[s];
}

function scoreUpdater(){
    let play1score = document.getElementById("player1-score");
    let play2score = document.getElementById("player2-score");
    play1score.textContent = "Player  : " + ascore;
    play2score.textContent = "Computer : " + bscore;
}

function randomchecker(a,b){
    if (a == "Rock" && b == "Paper"){
        bscore += 1;
        scoreUpdater();
        return "Paper Folded the Rock";
    }else if(a == "Rock" && b == "Scissor"){
        ascore += 1;
        scoreUpdater();
        return "Rock Beat the Scissor";
    }else if(a == "Paper" && b == "Rock"){
        ascore += 1;
        scoreUpdater();
        return "Paper Folded the Rock"
    }else if(a == "Scissor" && b == "Rock"){
        bscore += 1;
        scoreUpdater();
        return "Rock Beats the Scissor";
    }else if (a == "Paper" && b == "Scissor"){
        bscore += 1;
        scoreUpdater();
        return "Scissor cuts the Paper";
    }else if (a == "Scissor" && b == "Paper"){
        ascore += 1;
        scoreUpdater();
        return "Scissor cuts the Paper";
    }else if (a == "Scissor" && b == "Scissor"){
        return "Tie";
    }else if (a == "Paper" && b == "Paper"){
        return "Tie";
    }else if (a == "Rock" && b == "Rock"){
        return "Tie";
    }else{
        return "Something Issue";
    }
}

rockbtn.addEventListener("click",(event)=>{
    event.preventDefault();
    document.getElementById("player1-value").textContent = "Player : Rock";
    display.value = randomchecker("Rock",randomgenerator());
    console.log("Rock Success");
})

paperbtn.addEventListener("click",(event)=>{
    event.preventDefault();
    document.getElementById("player1-value").textContent = "Player : Paper";
    display.value = randomchecker("Paper",randomgenerator());
    console.log("Paper Success");
})

scissorbtn.addEventListener("click",(event)=>{
    event.preventDefault();
    document.getElementById("player1-value").textContent = "Player : Scissor";
    display.value = randomchecker("Scissor",randomgenerator());
    console.log("Scissor Success");
})
