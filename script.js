var rock = 1;
var paper = 2;
var scissors = 3;
var win = "Player Wins";
var lose = "Machine Wins"
var player;
var machine;


function game(machine, player) {
    machine = randomInt(1,3);
    if (player === machine) {
        console.log("Draw");
        alert("Draw");
    } else if (player === 1 ) {
        if (machine === 2) {
            console.log(lose);
            alert(lose);
        } else {
            console.log(win);
            alert(win);
        }
    } else if (player === 2) {
        if (machine === 1) {
            console.log(win);
            alert(win);
        } else {
            console.log(lose);
            alert(lose);
        }
    } else if (player === 3) {
        if (machine === 1) {
            console.log(lose);
            alert(lose);
        } else {
            console.log(win);
            alert(win);
        }
    }
}

function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

document.getElementById("rock").addEventListener("click", function(){
    player = rock;
    game(machine, player);
});

document.getElementById("paper").addEventListener("click", function(){
    player = paper;
    game(machine, player);
});

document.getElementById("scissors").addEventListener("click", function(){
    player = scissors;
    game(machine, player);
});