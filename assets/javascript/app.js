$(document).ready(function() {
  var correctAns = 0;
  var wrongAns = 0;
  var timer = 30;
  var noAns = 0;

  var questions = [
    {
      question: "What is the water type starter from Generation 1?",
      choice: ["Squirtle", "Charmander", "Pikachu", "Bulbasaur"],
      answer: 0,
      photo: "assets/images/pupusas.jpg"
    },
    {
      question: "What is the name of the nurse at the Pokemon Center?",
      choice: ["Jenny", "Joan", "Joy", "Jessie"],
      answer: 2,
      photo: "assets/images/mtdew.gif"
    }
  ];

  $("#startBtn").on("click", function() {
    $("#startBtn").hide();
    $("#question").append(questions[0].question + "<br>");
    $("#question").append(
      "<input name='q1' type=radio value='ans'>" +
        questions[0].choice[0] +
        "<br>"
    );
    $("#question").append(
      "<input name='q1' type=radio value='notAns'>" +
        questions[0].choice[1] +
        "<br>"
    );
    $("#question").append(
      "<input name='q1' type=radio value='notAns'>" +
        questions[0].choice[2] +
        "<br>"
    );
    $("#question").append(
      "<input name='q1' type=radio value='notAns'>" +
        questions[0].choice[3] +
        "<br>" +
        "<br>"
    );

    $("#question").append(questions[1].question + "<br>");
    $("#question").append(
      "<input name='q2' type=radio value='notAns'>" +
        questions[1].choice[0] +
        "<br>"
    );
    $("#question").append(
      "<input name='q2' type=radio value='notAns'>" +
        questions[1].choice[1] +
        "<br>"
    );
    $("#question").append(
      "<input name='q2' type=radio value='ans'>" +
        questions[1].choice[2] +
        "<br>"
    );
    $("#question").append(
      "<input name='q2' type=radio value='notAns'>" +
        questions[1].choice[3] +
        "<br>" +
        "<br>"
    );

    $("#divBtn").append("<button id='doneBtn'> Done </button>");
    submitDone();
  });

  function submitDone() {
    $("#doneBtn").on("click", function() {
      if ($("input[type='radio']:checked").val() == "ans") {
        correctAns++;
        console.log("Correct: " + correctAns);
      } 
      else if ($("input:checked").val() == "notAns") {
        wrongAns++;
        console.log("Incorrect: " + wrongAns);
      }

    });
  }
});
