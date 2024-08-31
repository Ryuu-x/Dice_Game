
let player1Rolled = false;
let player2Rolled = false;

function rollDice(player)
{
    if(player === "player1" && player1Rolled)   return;
    if(player === "player2" && player2Rolled)   return;

    var randomNumber = Math.floor(Math.random() * 6) + 1;
    var diceImage = "images/dice" + randomNumber + ".png";

    if(player === "player1")
    {
        document.querySelector(".img1").setAttribute("src", diceImage);
        document.querySelector(".img1").setAttribute("data-value", randomNumber);
        player1Rolled = true;
    }

    else
    {
        document.querySelector(".img2").setAttribute("src", diceImage);
        document.querySelector(".img2").setAttribute("data-value", randomNumber);
        player2Rolled = true;
    }

    var player1Value = document.querySelector(".img1").getAttribute("data-value");
    var player2Value = document.querySelector(".img2").getAttribute("data-value");

    if(player1Value && player2Value)
    {
        checkWinner(player1Value, player2Value);
    }

}

function checkWinner(player1Value, player2Value) 
{   
    var player1 = parseInt(player1Value);
    var player2 = parseInt(player2Value);
    var resultText = "";

    if(player1Value > player2Value)
    {
        resultText = "Player 1 Wins!";
    }

    else if(player1Value < player2Value)
    {
        resultText = "Player 2 Wins!";
    }

    else
    {
        resultText = "It's a Draw!";
    }

    document.querySelector("h1").textContent = resultText;

    setTimeout(function () 
    {
        if(confirm(resultText + " Play again?")) 
        {
            resetGame();
        }
    }, 500);

}


function resetGame()
{
    document.querySelector(".img1").setAttribute("src", "images/dice1.png");
    document.querySelector(".img1").removeAttribute("data-value");

    document.querySelector(".img2").setAttribute("src", "images/dice2.png");
    document.querySelector(".img2").removeAttribute("data-value");

    document.querySelector("h1").textContent = "The Dice Game";

    player1Rolled = false;
    player2Rolled = false;

}

document.querySelector(".img1").addEventListener("click", function() {
    rollDice("player1");
});

document.querySelector(".img2").addEventListener("click", function () {
    rollDice("player2");
});