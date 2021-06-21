let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("comp-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const charmander_div =document.getElementById("c");
const squirtle_div = document.getElementById('s');
const bulbasaur_div = document.getElementById('b');

const text = document.querySelector(".text_animation");
const strText = text.textContent;
const splitText = strText.split("");
text.textContent = "";

//-------------------------------Text Animation------------------------//
for (let i = 0; i < splitText.length; i++) {
    text.innerHTML += "<span>" + splitText[i] + "</span>";
}

let char = 0;
let timer = setInterval(onTick, 50);

function  onTick(){
    const span = text.querySelectorAll('span') [char];
    span.classList.add('fade');
    char++
    if (char === splitText.length) {
        complete();
        return;
    }
}

function complete() {
    clearInterval (timer);
    timer = null;
}




// ----------------------Game ----------------------------//

function getComputerOptions () {
    const options = ['c', 's', 'b'];
    const randomNumber = (Math.floor(Math.random() * 3));
    return options [randomNumber];
}

function converToWord (letter) {
    if (letter === "c") return "Charmander";
    if (letter === "s") return "Squirtle";
    if (letter === "b") return "Bulbasaur";
}

function win(userChoice, computerChoice) {
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    const samllUserWord = "user".fontsize(1).sub();
    const samllCompWord = "comp".fontsize(1).sub();
    result_p.innerHTML = `${converToWord(userChoice)}${samllUserWord}   defeats   ${converToWord(computerChoice)}${samllCompWord}   You WIN!`;
    
}

function lose(userChoice, computerChoice) {
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    const samllUserWord = "user".fontsize(3);
    const samllCompWord = "comp".fontsize(3);
    result_p.innerHTML = `${converToWord(computerChoice)}${samllCompWord}   defeats   ${converToWord(userChoice)}${samllUserWord}   You LOSE!`;
}

function draw(userChoice, computerChoice) {
    
    const samllUserWord = "user".fontsize(3);
    const samllCompWord = "comp".fontsize(3);
    result_p.innerHTML = `You both chose ${converToWord(userChoice)}   ,it's A DRAW!!`;
}


function game(userChoice) {
    const computerChoice = getComputerOptions();
    switch (userChoice + computerChoice) {
        case "cb":
        case "sc":
        case "bs":
            win(userChoice, computerChoice);
            break;
        case "cs":
        case "sb":
        case "bc":
            lose(userChoice, computerChoice);
            break;
        case "cc":
        case "ss":
        case "bb":
            draw(userChoice, computerChoice);
            break;
    }
}  

function main () {
    charmander_div.addEventListener('click', function() {
        game("c")
    })

    squirtle_div.addEventListener('click', function(){
        game("s")
    })

    bulbasaur_div.addEventListener('click', function(){
        game("b")
    })
}

main();




















