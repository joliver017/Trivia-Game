$(document).ready(function() {
  var correctAns = 0;
  var wrongAns = 0;
  var noAns = 0;
  var timer = 10;
  var intervalId;

  var questions = [
    {
      question: "What is the water type starter from Generation 1?",
      choice: ["Squirtle", "Charmander", "Pikachu", "Bulbasaur"],
      answer: 0,
    },
    {
      question: "What is the name of the nurse at the Pokemon Center?",
      choice: ["Jenny", "Joan", "Joy", "Jessie"],
      answer: 2,
    },
    {
      question: "What town is Ash from?",
      choice: ["Vermilion", "Pallet", "Cerulean", "Pewter"],
      answer: 1,
    },
    {
      question: "Who is the gym leader in Pewter City?",
      choice: ["Oak", "Gary", "Misty", "Brock"],
      answer: 3,
    },
    {
      question: "How many moves can a Pokemon learn?",
      choice: ["4", "5", "6", "3"],
      answer: 0,
    },
  ];

  $("#startBtn").on("click", function() {
    $("#startBtn").hide();
    $("#timer").html("<h2>Time remaining: " + timer + "</h2>")
    countdown();

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

    $("#question").append(questions[2].question + "<br>");
    $("#question").append(
      "<input name='q3' type=radio value='notAns'>" +
        questions[2].choice[0] +
        "<br>"
    );
    $("#question").append(
      "<input name='q3' type=radio value='ans'>" +
        questions[2].choice[1] +
        "<br>"
    );
    $("#question").append(
      "<input name='q3' type=radio value='notAns'>" +
        questions[2].choice[2] +
        "<br>"
    );
    $("#question").append(
      "<input name='q3' type=radio value='notAns'>" +
        questions[2].choice[3] +
        "<br>" +
        "<br>"
    );

    $("#question").append(questions[3].question + "<br>");
    $("#question").append(
      "<input name='q4' type=radio value='notAns'>" +
        questions[3].choice[0] +
        "<br>"
    );
    $("#question").append(
      "<input name='q4' type=radio value='notAns'>" +
        questions[3].choice[1] +
        "<br>"
    );
    $("#question").append(
      "<input name='q4' type=radio value='notAns'>" +
        questions[3].choice[2] +
        "<br>"
    );
    $("#question").append(
      "<input name='q4' type=radio value='ans'>" +
        questions[3].choice[3] +
        "<br>" +
        "<br>"
    );

    $("#question").append(questions[4].question + "<br>");
    $("#question").append(
      "<input name='q5' type=radio value='ans'>" +
        questions[4].choice[0] +
        "<br>"
    );
    $("#question").append(
      "<input name='q5' type=radio value='notAns'>" +
        questions[4].choice[1] +
        "<br>"
    );
    $("#question").append(
      "<input name='q5' type=radio value='notAns'>" +
        questions[4].choice[2] +
        "<br>"
    );
    $("#question").append(
      "<input name='q5' type=radio value='notAns'>" +
        questions[4].choice[3] +
        "<br>" +
        "<br>"
    );

    $("#divBtn").append("<button id='doneBtn'> Done </button>");
    submitDone();
  });

  function submitDone() {
    $("#doneBtn").on("click", function() {
    $('input[type="radio"]:checked').each(function() {
      if ($(this).val() == "ans") {
        correctAns++;
        noAns = noAns -3; // The function below is counting ALL unselected radio options, so on the questions where an option is selected, subtract the 3 unselected options
        console.log("Correct: " + correctAns); // console.log(this) This referring to the radio button
      } 
      else if ($(this).val() == "notAns") {
        wrongAns++;
        noAns = noAns - 3;
        console.log("Incorrect: " + wrongAns);
      }
    });

    $('input[type="radio"]').each(function() {
        if ($(this).is(":checked") == false) {
          noAns++;
          console.log("Unanswered: " + noAns);
        }
      });

    results();
    
    });
  };

  function results() {
    $("#question").empty();
    $("#timer").empty();
    $("#doneBtn").hide();
    $("#results").append("<p> Correct: " + correctAns + "</p>")
    $("#results").append("<p> Incorrect: " + wrongAns + "</p>")
    $("#results").append("<p> Unanswered: " + noAns / 4 + "</p>")
    // Unanswered score is divided by 4 for the number of options unselected in each question
  }

  function countdown() {
    intervalId = setInterval(decrement, 1000);
  }

  function decrement() {
    $("#timer").html("<h2>Time remaining: " + timer + "</h2>")
    timer --;

    if (timer === 0) {
        stop();
        $("#doneBtn").trigger("click");
    }
  }

  function stop() {
      running = false;
      clearInterval(intervalId);
  }
});
