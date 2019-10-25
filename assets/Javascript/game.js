$(document).ready(function () {
    var qnA = [
        {
            q: "What is in my fridge right now?",
            a: "Cheese Stick"
        },
        {
            q: "When was i born?",
            a: "1989"
        },
        {
            q: "Would you play front-hand-back-hand?",
            a: "Yes"
        },
        {
            q: "What my Favorite Color?",
            a: "Blue"
        }
    ];
    var choices = {
        0: ["Chocolate Milk", "Peanut Butter", "Rabies", "Cheese Stick"],
        1: ["2001", "1989", "1900", "2012"],
        2: ["Yes", "No"],
        3: ["Red", "Green", "Blue", "Yellow"]


    };


    var correct = 0;
    var wrong = 0;

    $("#start").on("click", function () {
        var divSet = document.getElementById("start");
        divSet.innerHTML = "";
        startGame()
    });

    //Timer
    var number = 30;
    var intervalId;
    function run() {
        clearInterval(intervalId);
        intervalId = setInterval(decrement, 1000);
    };
    function decrement() {
        number--;
        $("#countDown").text(number)
        if (number === 0) {
            clearInterval(intervalId);
            alert("Time Up!")
        }

    }

    function startGame() {
        number = 30;
        $("#time").text("Time Reamining: ");
        $("#countDown").text(number)
        run();
        displayQ();

    };

    var x = 0
    function displayQ() {
        var divSelect = document.getElementById("allQuestions");
        divSelect.innerHTML = "";
        var newQuest = document.createElement("div");
        newQuest.id = "nextQuestion" + (x);
        newQuest.className = "col questions";
        divSelect.appendChild(newQuest);
        $("#nextQuestion" + x).html(qnA[x].q);

        for (var i = 0; i < 4; i++) {
            var newAnsw = document.createElement("div");
            newAnsw.id = "nextAnsw" + (i);
            newAnsw.className = "col answer";
            divSelect.append(newAnsw);
            var ansCho = document.getElementById(newAnsw.id);
            ansCho.textContent = choices[x][i];
            ansCho.setAttribute("data-name", "nextQuestion" + x)
        }
        clicker();
    }

    function clicker() {
        $(".answer").on("click", answer)
    };

    function answer() {

        console.log(event);
        clearInterval(intervalId);
        var currentQ = event.target.dataset.name;
        var setIndex = currentQ.substring(12);
        var currentA = qnA[setIndex].a;
        var userInput = event.target.innerText;
        console.log(userInput);
        console.log(currentA);
        var divSelect = document.getElementById("allQuestions");
        divSelect.innerHTML = "";
        var newQuest = document.createElement("div");
        newQuest.id = "rightWrongAnswer";
        newQuest.className = "col answer";
        divSelect.appendChild(newQuest);
        if (currentA === userInput) {
            $("#rightWrongAnswer").html("Correct Answer: " + qnA[x].a);
            correct++;
            if (x === 2) {
                endGame();
            };
            x++;
            console.log(correct);
            setTimeout(startGame, 5000);

        }
        else {
            $("#rightWrongAnswer").html("Wrong");
            $("#rightWrongAnswer").append("<br>");
            $("#rightWrongAnswer").append("Correct Answer: " + qnA[x].a);
            wrong++;
            if (x === 2) {
                endGame();
            };
            x++;
            console.log(wrong);
            setTimeout(startGame, 5000);

        }
    }

    function endGame() {
        var divSelect = document.getElementById("allQuestions");
        divSelect.innerHTML = "";
        var newQuest = document.createElement("div");
        newQuest.id = "endGame";
        newQuest.className = "col endGame";
        divSelect.appendChild(newQuest);
        $("#endGame").html("Correct: " + correct);
        $("#endGame").append("Wrong: " + wrong);
        setTimeout( , 10000)
    }
})



/*
1 hide time in the beginning @
2 click start then hide start @
3 show first question by dynamically creating it @
4 answer selected will push into array @
5 repeat 3 & 4 @
6 at the end click finish and hide the questions and bring in the results
7 results will compare the answer from new array to qnA array
7b  will add correct+ and wrong+ and push that into array>object where answers were placed
8 dynamic create div so you can display show results and have reset button at bottom
*/