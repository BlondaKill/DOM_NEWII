
const resetButton = document.querySelector("#resetButton");

const playTo = document.querySelector("#playTo");

let winningScore = 3;
let isGameOver = false;

const player1 = {
    score : 0,
    button: document.querySelector("#p1Button"),
    display: document.querySelector("#p1Display"),
}
const player2 = {
    score : 0,
    button: document.querySelector("#p2Button"),
    display: document.querySelector("#p2Display")
}

function updateScores( player, opponent) {
    if (!isGameOver){
        player.score++;
        if (player.score === winningScore) {
            isGameOver = true;
            player.display.classList.add("winner");
            player.button.disabled = true;
            opponent.display.classList.add("loser");
            opponent.button.disabled = true;
        }
        player.display.textContent = player.score;
    }
}

player1.button.addEventListener("click", function () {
    updateScores(player1, player2)
    
});



player2.button.addEventListener("click", function () {
    updateScores(player2, player1)
    });


function reset() {
    isGameOver = false;
    for (let p of [player1, player2]){
        console.log(p, p.score)
        p.score = 0;
        p.display.textContent = 0;
        p.display.classList.remove("loser", "winner")
        p.button.disabled = false;
    }
}

resetButton.addEventListener("click", reset);


playTo.addEventListener("change", function() {
    winningScore = Number (this.value);
    reset ();
});
