$(document).ready(function () {

    // Global scope 

    var correctNumber;
    var userTotal = 0;
    var wins = 0;
    var losses = 0;

    // game

    function reset() {
        for(var i = 0; i < crystals.length; i++) {
            crystals[i].setAttribute("score", Math.floor(Math.random() * 18 + 1))
        }
        correctNumber = Math.floor(Math.random() * 101 + 19);
        userTotal = 0;
        $("#total-score").text(userTotal);
        $("#target-score").text(correctNumber);
    }

    function initialize() {
        crystals = document.getElementsByTagName("img")
        for(var i = 0; i < crystals.length; i++) {
            crystals[i].setAttribute("score", Math.floor(Math.random() * 18 + 1))
            crystals[i].addEventListener("click", (args) => {
                value = Math.round(args.target.getAttribute("score"))
                userTotal = userTotal + value;
                $("#total-score").text(userTotal);
                console.log(userTotal);
                logic();
            })
        }
        correctNumber = Math.floor(Math.random() * 101 + 19);
        $("#target-score").text(correctNumber);
        $("#wins").text(wins);
        $("#losses").text(losses);
        $("#total-score").text(userTotal);
    }
    function logic() {
        if (userTotal === correctNumber) {
            alert("You Win!");
            reset();
            wins++;
            $("#wins").text(wins);
        }
        else if (userTotal > correctNumber) {
            alert("You lose!");
            reset();
            losses++;
            $("#losses").text(losses);
        }
    }

    initialize();
});