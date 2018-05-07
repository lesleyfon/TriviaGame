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
var userAnswer1,userAnswer2;

var correct = 0;
var incorrect = 0;
var Robinho = questionsArr[0].correctAns;


function decrement() {
    timer--;
    if (timer <= 0) {

        clearInterval(interval)
        setTimeout(function () {
           
            console.log(Robinho)

    
            endGame()
        }, 1000)


    }
    $("#timer").text(timer)
}
function endGame() {
    clearInterval(interval)
    if (userAnswer1== questionsArr[0].correctAns){
        correct++
    } else if(userAnswer1 != questionsArr[0].correctAns ){
        incorrect++
    }
    if (userAnswer2== questionsArr[1].correctAns){
        correct++
    } else if(userAnswer2 != questionsArr[1].correctAns ){
        incorrect++
    }

    $("#question-div").hide();
    $("#timer-div").hide()
    $(".trivia-submit").hide()

    $("#main-content").append("<h3>Correct Answers: " + correct + "</h3>")
    $("#main-content").append("<h3>Incorrect Answers: " + incorrect + "</h3>")
}
//create a function for the timer and use set interval
function timerCountDown() {
    timer = setInterval()

}
var timer = 15
// var questionCounter= 0
function displayQuestion() {

    for (var i = 0; i < questionsArr.length; i++) {
        $("#question-div").append("<h3 class= 'question' > " + questionsArr[i].question + "</h3>");

        for (var j = 0; j < questionsArr[i].answers.length; j++) {
            $("#question-div").append("<input type='radio' name=" + questionsArr[i].name + " class='radioButton" + i + "' value='" + questionsArr[i].answers[j] + "'>" + questionsArr[i].answers[j])

            // change the answer div to radio input div
        }
    }

}
// call your timer function

var interval;
$(document).ready(function () {
    $(".trivia-submit").hide()
    $("#timer-div").hide()
    $("#start-btn").on('click', function () {
        interval = setInterval(decrement, 1000)
        $(".trivia-submit").show()
        $("#timer-div").show()
        $("#start-btn").hide()
        displayQuestion()
    })

}) 
$(document).on("click", ".trivia-submit", function(){
    // This grabs the value of the checked radio buttons
     userAnswer1 = $(".radioButton0:checked").val();
     userAnswer2 = $(".radioButton1:checked").val()
    console.log(userAnswer1)
    console.log(userAnswer2)
    
   

    endGame()
    //Give each question's radio buttons a different class
    //if userAnswer === questionsArr[i].correctAns, increment their score. If it doesn't, increment incorrect answers
})