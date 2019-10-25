
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
        },
        {
            q: "what is the color my of car?",
            a: "Gray"
        },
        {
            q: "What year did the Astro last win the World Series?",
            a: "2017"
        }

    ];
    var choices = {
        0: ["Chocolate Milk", "Peanut Butter", "Rabies", "Cheese Stick"],
        1: ["2001", "1989", "1900", "2012"],
        2: ["Yes", "No"],
        3: ["Red", "Green", "Blue", "Yellow"],
        4: ["Silver", "Gray", 'Blue', 'Black'],
        5: ["2002", "1989", "1900", "2017"]
    };
    
    var x = 0;
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
        $("#countDown").text(number);
        if (number === 0) {
            clearInterval(intervalId);
            answer();
        }
        
    };
    
    function startGame() {
        number = 30;
        $("#time").text("Time Reamining: ");
        $("#countDown").text(number);
        run();
        displayQ();

    };
    
    function displayQ() {
        var divSelect = document.getElementById("allQuestions");
        divSelect.innerHTML = "";
        var newQuest = document.createElement("div");
        newQuest.id = "nextQuestion" + (x);
        newQuest.className = "col questions";
        newQuest.setAttribute("style", "font-weight:bold;text-decoration:underline");
        divSelect.appendChild(newQuest);
        $("#nextQuestion" + x).html(qnA[x].q);
        
        for (var i = 0; i < 4; i++) {
            var newAnsw = document.createElement("div");
            newAnsw.id = "nextAnsw" + (i);
            newAnsw.className = "col answer";
            divSelect.append(newAnsw);
            var ansCho = document.getElementById(newAnsw.id);
            ansCho.textContent = choices[x][i];
            ansCho.setAttribute("data-name", "nextQuestion" + x);
        }
        $(".answer").on("click", answer);
    }
        
    
    function answer(event) {
        if (typeof (event) === "undefined") {
            var divSelect = document.getElementById("allQuestions");
            divSelect.innerHTML = "";
            var newQuest = document.createElement("div");
            newQuest.id = "rightWrongAnswer";
            newQuest.className = "col answer";
            newQuest.setAttribute("style", "font-weight:bold;");
            divSelect.appendChild(newQuest);
            $("#rightWrongAnswer").html("Wrong");
            $("#rightWrongAnswer").append("<br>");
            $("#rightWrongAnswer").append("Correct Answer: " + qnA[x].a);
            wrong++;
            if (x ===  (qnA.length -1)) {
                endGame();
            }
            else {
                x++;
                setTimeout(startGame, 5000);
            }
        }
        else {
            clearInterval(intervalId);
            var currentQ = event.target.dataset.name;
            var setIndex = currentQ.substring(12);
            var currentA = qnA[setIndex].a;
            var userInput = event.target.innerText;
            var divSelect = document.getElementById("allQuestions");
            divSelect.innerHTML = "";
            var newQuest = document.createElement("div");
            newQuest.id = "rightWrongAnswer";
            newQuest.className = "col answer";
            newQuest.setAttribute("style", "font-weight:bold;")
            divSelect.appendChild(newQuest);
            if (currentA === userInput) {
                $("#rightWrongAnswer").html("Correct Answer: " + qnA[x].a);
                correct++;
                if (x === (qnA.length -1)) {
                    endGame();
                }
                else {
                    x++;
                    setTimeout(startGame, 5000);
                }
                
            }
            else {
                $("#rightWrongAnswer").html("Wrong");
                $("#rightWrongAnswer").append("<br>");
                $("#rightWrongAnswer").append("Correct Answer: " + qnA[x].a);
                wrong++;
                if (x ===  (qnA.length -1)) {
                    endGame();
                }
                else {
                    x++;
                    setTimeout(startGame, 5000);
                }

            }
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
        $("#endGame").append("<br>");
        $("#endGame").append("Wrong: " + wrong);
        setTimeout(startOver, 5000);
    };
    function startOver() {
        correct = 0;
        wrong = 0;
        x = 0;
        var divSelect = document.getElementById("allQuestions");
        divSelect.innerHTML = "";
        $("#start").html("Start");

    }

})
