function submitQuiz() {
    if (!document.getElementById("check").checked) {
        alert("You must check the box")

    }



function answerScore (qName) {
var radiosNo = document.getElementsByName(qName);

for (var i = 1, length = radiosNo.length; i < length; i++) {
if (radiosNo[i].checked) {
var answerValue = Number(radiosNo[i].value);
localStorage.setItem("answerValue", answerValue);
  }
  }
if (isNaN(answerValue)) {
    answerValue = 0;
  }
return answerValue;

    }

    var calcScore = (answerScore('q2') + answerScore('q3') + answerScore('q4'));
    console.log("CalcScore: " + calcScore);

    function correctAnswer (correctStringNo, qNumber) {
        console.log("qNumber: " + qNumber);
        return ("Correct answer for question number  " + qNumber + ": &nbsp;<strong>" +
            (document.getElementById(correctStringNo).innerHTML) + "</strong>");
        }

    if (answerScore('q2') === 1) {
        document.getElementById('correctAnswer2').innerHTML = correctAnswer('correctString2', 2);
    }
    if (answerScore('q3') === 1) {
        document.getElementById('correctAnswer3').innerHTML = correctAnswer('correctString3', 3);
    }
    if (answerScore('q4') === 0) {
        document.getElementById('correctAnswer4').innerHTML = correctAnswer('correctString4', 4);
    }

    var questionCountArray = document.getElementsByClassName('question');

    var questionCounter = 0;
    for (var i = 1, length = questionCountArray.length; i < length; i++) {
        questionCounter++;
    }

    var showScore = "Your Score: " + calcScore +"/" + questionCounter;

    document.getElementById('userScore').innerHTML = showScore;
}
