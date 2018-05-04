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
function correctAnswers() {
    $
}
var correct = 0;
var incorrect=0;
var Robinho = questionsArr[0].correctAns;
function decrement() {
    timer--;
    if (timer <= 0) {
       
        clearInterval(interval)
        setTimeout(function(){
            $("#main-content").empty();
            console.log(Robinho)
           if (questionsArr[0].question===Robinho){
               correct++
               console.log("hello")
           }else {
               incorrect++
               console.log("goodbye")
           };
        //    if (questionsArr[1].correctAns==="Liverpool"){
        //     correct++
            
        // }else {
        //     incorrect++
        // };
        $("#main-content").append("<h3>Correct Answers: " + correct + "</h3>")
        $("#main-content").append("<h3>Incorrect Answers: " + incorrect + "</h3>")
        }, 1000 )


    }
    $("#timer").text(timer)
}
//create a function for the timer and use set interval
function timerCountDown() {
    timer = setInterval()

}
var timer = 5
// var questionCounter= 0
function displayQuestion() {

    for (var i = 0; i < questionsArr.length; i++) {
        $("#question-div").append("<h3 class= 'question' > " + questionsArr[i].question + "</h3>");

        for (var j = 0; j < questionsArr[i].answers.length; j++) {
            $("#question-div").append("<input type='radio' name=" + questionsArr[i].name + " class='radioButton' value= "+ questionsArr[i].answers[j] + ">" + questionsArr[i].answers[j])

            // change the answer div to radio input div
        }
    }

}
// call your timer function

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
