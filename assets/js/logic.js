
const SFX_INCORRECT = new Audio('./assets/sfx/incorrect.wav');
const SFX_CORRECT = new Audio('./assets/sfx/correct.wav');

// const variables - will never be changed, only read and activated
const START_BUTTON = document.querySelector("#start-btn");
const SUBMIT_BUTTON = document.querySelector("#submit-btn");

// DOM/content element variables
let introPageEl = document.querySelector(".intro-page");
let questionsEl = document.querySelector("#quiz-questions");
let outroPage = document.querySelector("#outro-page");
let choicesEl = document.querySelector("#choices");
let initialsEl = document.querySelector("#initials");
let progressEl = document.querySelector("#progress");
let userScoreEl = document.querySelector("#user-score");

// timer variables
let timerEl = document.querySelector("#time");
let timer;
let timeCount = questions.length * 10;

// questions variables
let currentQuestionIndex = 0;

// functions
function startQuiz() {
    introPageEl.setAttribute("class", "hide"); // hides intro page
    questionsEl.removeAttribute("class", "hide"); // shows questions

    startTimer(); // runs timer
    runQuestions(); // starts questions
};

function startTimer() {
    timer = setInterval(function () {
        timeCount--;
        timerEl.textContent = timeCount;

        if (timeCount === 0) {
            endQuiz();
        } // when time reaches zero, show outro-page
    }, 1000);
}

function runQuestions() {
    // sets up the index of questions and lists the current question
    let currentQuestion = questions[currentQuestionIndex];
    let askQuestion = document.querySelector("#question-ask");
    askQuestion.textContent = currentQuestion.ask;

    // clears out multiple choice list of previous question
    choicesEl.innerHTML = "";

    // turns choices into buttons by question
    currentQuestion.choices.forEach(function (choices, i) {
        let choiceButton = document.createElement("button");
        choiceButton.setAttribute("class", "choices");
        choiceButton.setAttribute("value", choices);

        choiceButton.textContent = i + 1 + ". " + choices;

        choiceButton.onclick = nextQuestion;

        choicesEl.appendChild(choiceButton);
    });
}

function nextQuestion() {
    // show progress statements
    progressEl.removeAttribute("class", "hide"); 

    // correct vs incorrect conditions
    if (this.value !== questions[currentQuestionIndex].correct) {
        timeCount -= 10;
        if (timeCount < 0) { timeCount = 0; }

        timerEl.textContent = time;
        SFX_INCORRECT.play();
        progressEl.textContent = "That was incorrect.";
    } else {
        SFX_CORRECT.play();
        progressEl.textContent = "Correct, nice work!";
    }

    // moves along the array of questions or ends the quiz if there are none left
    currentQuestionIndex++;

    if (currentQuestionIndex === questions.length) {
        endQuiz();
    } else {
        runQuestions();
    }
}

function endQuiz() {
    clearInterval(timer);
    progressEl.setAttribute("class", "hide");
    questionsEl.setAttribute("class", "hide"); // hide progress statements and questions
    outroPage.removeAttribute("class", "hide"); // show outro-page

    userScoreEl.innerHTML = timeCount;
}

// save score to localstorage
function storeScore(event) {
    let highScores = JSON.parse(localStorage.getItem("highScores")) || [];

    if (initialsEl.value !== "") {

        let quizScore = {
            name: initialsEl.value.trim(),
            score: timeCount
        };

        //adds the new quiz score to the highscores array and stringify for local storage
        highScores.push(quizScore);

        localStorage.setItem("highScores", JSON.stringify(highScores));

        location.href = "highscores.html";
    }
}

// button actions
START_BUTTON.addEventListener("click", startQuiz);
SUBMIT_BUTTON.addEventListener("click", storeScore);
