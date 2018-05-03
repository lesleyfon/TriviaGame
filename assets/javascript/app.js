var questionsArr = [
    {
        question: "Which of these star soccer players has never played for Real Madrid?",
        answers: ["David Beckham", "Zinedine Zidane", "Ronaldo", "Robinho"],
        correctAns: "Robinho",
        name: "q1"

    },
    {
        question: "Anfield is the home of which English Premier League club",
        answers: ["Manchester United", "West Ham United", "Manchester City", "Liverpool", "Everton"],
        correctAns: "Liverpool"

    }
   
]

function decrement(){
    timer--;
    if (timer<=0){
        clearInterval(interval)
       
    }
    $("#timer").text(timer)
}
 //create a function for the timer and use set interval
    function timerCountDown(){
        timer =setInterval()
        
    }
var timer = 30
// var questionCounter= 0
function displayQuestion() {

    for (var i = 0; i < questionsArr.length; i++) {
        $("#question-div").append("<h3 class= 'question' > " + questionsArr[i].question + "</h3>")
        for (var j = 0; j < questionsArr[i].answers.length; j++) {
            $("#question-div").append("<input type='radio' name=" + questionsArr[i].name + " id='radioButton'>" + questionsArr[i].answers[j] )
// change the answer div to radio input div
        }


    } // call your timer function
}
var interval;
$(document).ready(function () {
    $("#timer-div").hide()
    $("#start-btn").on('click', function () {
        interval = setInterval(decrement, 1000)
        $("#timer-div").show()
        $("#start-btn").hide()
        displayQuestion()
        
    })
})