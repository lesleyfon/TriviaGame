// var questionsArr = [
//     {
//         question: "Which of these star soccer players has never played for Real Madrid?",
//         answers: ["David Beckham", "Zinedine Zidane", "Ronaldo", "Robinho"],
//         correctAns: "Robinho"

//     },
//     {
//         question: "Anfield is the home of which English Premier League club",
//         answers: ["Manchester United", "West Ham United", "Manchester City", "Liverpool", "Everton"],
//         correctAns: "Liverpool"

//     }
//     //create a function for the timer and use set interval

// ]
// var timer = 30
// // var questionCounter= 0
// function displayQuestion() {
//     $("#timer").text(timer)
//     for (var i = 0; i < questionsArr.length; i++) {
//         $("#question-div").append("<h3 class= 'question' > " + questionsArr[i].question + "</h3>")
//         for (var j = 0; j < questionsArr[i].answers.length; j++) {
//             $("#question-div").append("<input type='radio' name='optradio' id='radioButton'>" + questionsArr[i].answers[j] )
// // change the answer div to radio input div
//         }


//     } // call your timer function
// }

// $(document).ready(function () {
//     $("#timer-div").hide()
//     $("#start-btn").on('click', function () {
//         $("#timer-div").show()
//         $("#start-btn").hide()
//         displayQuestion()

//     })
// })