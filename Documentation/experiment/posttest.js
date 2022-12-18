
// Don't touch the below code

(function() {
  function buildQuiz() {
    // we'll need a place to store the HTML output
    const output = [];

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // we'll want to store the list of answer choices
      const answers = [];

      // and for each available answer...
      for (letter in currentQuestion.answers) {
        // ...add an HTML radio button
        answers.push(
          `<label>
            <input type="radio" name="question${questionNumber}" value="${letter}">
            ${letter} :
            ${currentQuestion.answers[letter]}
          </label>`
        );
      }

      // add this question and its answers to the output
      output.push(
        `<div class="question"> ${currentQuestion.question} </div>
        <div class="answers"> ${answers.join("")} </div>`
      );
    });

    // finally combine our output list into one string of HTML and put it on the page
    quizContainer.innerHTML = output.join("");
  }

  function showResults() {
    // gather answer containers from our quiz
    const answerContainers = quizContainer.querySelectorAll(".answers");

    // keep track of user's answers
    let numCorrect = 0;

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // find selected answer
      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;

      // if answer is correct
      if (userAnswer === currentQuestion.correctAnswer) {
        // add to the number of correct answers
        numCorrect++;

        // color the answers green
        //answerContainers[questionNumber].style.color = "lightgreen";
      } else {
        // if answer is wrong or blank
        // color the answers red
        answerContainers[questionNumber].style.color = "red";
      }
    });

    // show number of correct answers out of total
    resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
  }

  const quizContainer = document.getElementById("quiz");
  const resultsContainer = document.getElementById("results");
  const submitButton = document.getElementById("submit");


// Don't touch the above code




// Write your MCQs here --- Start --- --------------------
  const myQuestions = [
    {
      question: "Given that rk = 2.14, rc = 1.29, rp = 2.06, what is the air standard efficiency of the Dual cycle?"",
      answers: {
        a: "0.25",
        b: "0.3",
        c: "0.45",
        d: "0.47"
      },
      correctAnswer: "a"
    },
    {
      question: "If the Otto, Diesel and Dual cycles have the same compression ratio, how do their efficiencies vary?",
      answers: {
        a: "ηOtto < ηDiesel < ηDual",
        b: "ηDiesel < ηDual < ηOtto",
        c: "ηDual < ηOtto < ηDiesel"
      },
      correctAnswer: "b"
    },
    {
      question: "If the Otto, Diesel and Dual cycles have the same maximum pressure, how do their efficiencies vary?",
      answers: {
        a: "ηDiesel < ηDual < ηOtto",
        b: "ηDual < ηOtto < ηDiesel",
        c: "ηOtto < ηDual < ηDiesel"
      },
      correctAnswer: "c"
    },
    {
      question: "If the Otto, Diesel and Dual cycles have the same maximum temperature, how do their efficiencies vary?",
      answers: {
        a: "ηDiesel < ηDual < ηOtto",
        b: "ηDual < ηOtto < ηDiesel",
        c: "ηOtto < ηDual < ηDiesel"
      },
      correctAnswer: "c"
    }
  ];




// ---------------------------- End -------------------------------








  // display quiz right away
  buildQuiz();

  // on submit, show results
  submitButton.addEventListener("click", showResults);
})();
