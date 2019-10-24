$(document).ready(function () {
    var qnA = [
        {
            q1: "What is my name?",
            a1: "Nadeem"
        },
        {
            q2: "When was i born?",
            a2: "1989"
        }

    ]

    function createEle() {
        var divSelect = document.getElementById("questions");
        var newElement = document.createElement("div");
        newElement.id = "nextQuestion";
        newElement.className = "col";
        divSelect.appendChild(newElement);
    }

    createEle()
     


})


/*
1 hide time in the beginning 
2 click start then hide start
3 show first question by dynamically creating it
4 answer selected will push into array
5 repeat 3 & 4
6 at the end click finish and hide the questions and bring in the results
7 results will compare the answer from new array to qnA array
7b  will add correct+ and wrong+ and push that into array>object where answers were placed
8 dynamic create div so you can display show results and have reset button at bottom
*/