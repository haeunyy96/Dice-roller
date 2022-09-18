
const play = document.querySelector("button");

play.addEventListener('click', function(event) {
    event.preventDefault();

    // player1Name = (prompt("What is the name of Player 1?")).toLowerCase()
    // player2Name = (prompt("What is the name of Player 2?")).toLowerCase()

    // player1NameFirst = (player1Name.charAt(0)).toUpperCase();
    // player2NameFirst = (player2Name.charAt(0)).toUpperCase();

    // player1NameSlice = player1Name.slice(1, player1Name.length);
    // player2NameSlice = player2Name.slice(1, player2Name.length);

    // player1NameFinal = player1NameFirst + player1NameSlice;
    // player2NameFinal = player2NameFirst + player2NameSlice;

    // player1 = document.querySelector(".player1").innerHTML = player1NameFinal;
    // player2 = document.querySelector(".player2").innerHTML = player2NameFinal;

    const randomNumber1 = Math.floor(Math.random() * 6 + 1);
    const randomNumber2 = Math.floor(Math.random() * 6 + 1);


    dice1 = document.querySelector(".img1").src = "images/dice" + randomNumber1 + ".png";
    dice2 = document.querySelector(".img2").src = "images/dice" + randomNumber2 + ".png";

    if (randomNumber1 > randomNumber2) {
        document.querySelector("h1").innerHTML = "Player 1 wins!";
    } else if (randomNumber1 < randomNumber2) {
        document.querySelector("h1").innerHTML = "Player 2 wins!";
    } else {
        document.querySelector("h1").innerHTML = "It's a Draw!";
    }
})

