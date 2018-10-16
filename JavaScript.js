
window.onload = function () {
    var i = 0;
    for (i = 0; i < 9; i++) {
        document.getElementById("" + i + "").addEventListener("click", clickOne);
    }
    document.getElementById("reset").addEventListener("click",Reset)
}

function clickOne() {
    this.innerHTML = "X";
    checkWinner();
    makeNextMove();
    checkWinner();
    this.removeEventListener("click", clickOne);
}

function makeNextMove() {
    if (document.getElementById("4").innerHTML == ""){
        document.getElementById("4").innerHTML = "O"
        document.getElementById("4").removeEventListener("click", clickOne)
    }
    else if (document.getElementById("0").innerHTML == "") {
        document.getElementById("0").innerHTML = "O"
        document.getElementById("0").removeEventListener("click", clickOne)
    }
    else if (document.getElementById("2").innerHTML == "") {
        document.getElementById("2").innerHTML = "O"
        document.getElementById("2").removeEventListener("click", clickOne)
    }
    else if (document.getElementById("6").innerHTML == "") {
        document.getElementById("6").innerHTML = "O"
        document.getElementById("6").removeEventListener("click", clickOne)
    }
    else if (document.getElementById("8").innerHTML == "") {
        document.getElementById("8").innerHTML = "O"
        document.getElementById("8").removeEventListener("click", clickOne)
    }
    else if (document.getElementById("1").innerHTML == "") {
        document.getElementById("1").innerHTML = "O"
        document.getElementById("1").removeEventListener("click", clickOne)
    }
    else if (document.getElementById("3").innerHTML == "") {
        document.getElementById("3").innerHTML = "O"
        document.getElementById("3").removeEventListener("click", clickOne)
    }
    else if (document.getElementById("5").innerHTML == "") {
        document.getElementById("5").innerHTML = "O"
        document.getElementById("5").removeEventListener("click", clickOne)
    }
    else if (document.getElementById("7").innerHTML == "") {
        document.getElementById("7").innerHTML = "O"
        document.getElementById("7").removeEventListener("click", clickOne)
    }
        
};

function checkWinner() {
    var zero = document.getElementById("0").innerHTML;
    var one = document.getElementById("1").innerHTML;
    var two = document.getElementById("2").innerHTML;
    var three = document.getElementById("3").innerHTML;
    var four = document.getElementById("4").innerHTML;
    var five = document.getElementById("5").innerHTML;
    var six = document.getElementById("6").innerHTML;
    var seven = document.getElementById("7").innerHTML;
    var eight = document.getElementById("8").innerHTML;
    var Winner = false;
    var Tie = false;
    var XOrO = "";

    if (zero != "") {
        XOrO = zero;
        if (zero == one && zero == two) {
            Winner = true
            SetGameStatus(Winner, Tie, XOrO);
        }
        else if (zero == three && zero == six) {
            Winner = true
            SetGameStatus(Winner, Tie, XOrO);
        }
        else if (zero == four && zero == eight) {
            Winner = true
            SetGameStatus(Winner, Tie, XOrO);
        };
    };
    if(Winner == false && four != "")
    {
        XOrO = four;
        if (four == one && four == seven) {
            Winner = true
            SetGameStatus(Winner, Tie, XOrO);
        }
        else if (four == three && four == five) {
            Winner = true
            SetGameStatus(Winner, Tie, XOrO);
        }
        else if (four == two && four == six) {
            Winner = true
            SetGameStatus(Winner, Tie, XOrO);
        };
    }
    if(Winner == false && eight != "")
    {
        XOrO = eight;
        if (eight == seven && eight == six) {
            Winner = true
            SetGameStatus(Winner, Tie, XOrO);
        }
        else if (eight == five && eight == two) {
            Winner = true
            SetGameStatus(Winner, Tie, XOrO);
        };
    }
    else if(one != "" && two != "" && three != "" &&
        four != "" && five != "" && six != "" &&
        seven != "" && eight != "" && zero != "" && Winner == false)
    {
        Tie = true
        SetGameStatus(Winner, Tie, XOrO);
    }
};

function SetGameStatus(Winner2, Tie2, XOrO2)
{
    var message = ""
    if (Winner2 == true && XOrO2 == "X")
    {
        message = "You are the Winner!";
        document.getElementById("Winner").innerHTML = message;
        for (i = 0; i < 9; i++) {
            document.getElementById("" + i + "").removeEventListener("click", clickOne);
        }
    }
    else if(Winner2 == true && XOrO2 == "O")
    {
        message = "The computer won.";
        document.getElementById("Winner").innerHTML = message;
        for (i = 0; i < 9; i++) {
            document.getElementById("" + i + "").removeEventListener("click", clickOne);
        }
    }
    else if(Tie2 == true)
    {
        message = "It was a tie.";
        document.getElementById("Winner").innerHTML = message;
        for (i = 0; i < 9; i++) {
            document.getElementById("" + i + "").removeEventListener("click", clickOne);
        }
    }
    
}

function Reset() {
    location.reload();
}