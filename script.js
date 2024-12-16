let timer = 30;
let score = 0;
let currentQuestionIndex = 0;
let interval;
let rockScore = 0;

const questions = [
    { question: "What is the capital of France", answer: "Paris"},
    { question: "How many legs does a spider have", answer: "8"},
    { question: "What is 5+5?", answer: "10"},
    { question: "Who wrote 'Romeo and Juliet'?", answer: "Shakespeare"}
];

const timerElement = document.getElementById("timer");
const questionElement = document.getElementById("question");
const answerElement = document.getElementById("answer");
const scoreElement = document.getElementById("score");
const startButton = document.getElementById("start-button");
const rockElement = document.getElementById("rock");
const rockScoreElement = document.getElementById("rock-counter");

rockElement.addEventListener("click", () => {
    rockScore++;
    rockScoreElement.textContent = `You've Clicked me ${rockScore} Times!`
})

function startGame() {
    if (currentQuestionIndex > questions.length) {
        currentQuestionIndex = 0;
    }
    score = 0;
    timer = 30;
    startButton.disabled = true;
    answerElement.disabled = false;
    answerElement.value = "";
    scoreElement.textContent = `Score: ${score}`;
    startButton.classList.add("hidden")
    answerElement.classList.remove("hidden")
    loadQuestion();
    startTimer();
}

function startTimer() {
    interval = setInterval(() => {
        timer--;
        timerElement.textContent = timer;
        if (timer === 0) {
            endGame();
        }
    }, 1000);
}

function loadQuestion() {
    if (currentQuestionIndex < questions.length) {
        questionElement.textContent = questions[currentQuestionIndex].question;
    } else {
        endGame();
    }
}

function checkAnswer() {
    const userAnswer = answerElement.value.trim().toLowerCase();
    const correctAnswer = questions[currentQuestionIndex].answer.toLowerCase();

    if (userAnswer.includes(correctAnswer) || correctAnswer.includes(userAnswer)) {
        score++;
        scoreElement.textContent = `Score: ${score}`;
    }
    answerElement.value = "";
    currentQuestionIndex++;
    loadQuestion();
}

function endGame() {
    clearInterval(interval);
    questionElement.textContent = "Game over! Your final score is: " + score;
    startButton.disabled = false;
    startButton.classList.remove("hidden")
    answerElement.disabled = true;
    timer = 30;
    timerElement.textContent = timer;
    startButton.textContent = "Restart";
    answerElement.classList.add("hidden")
    currentQuestionIndex++;
}

startButton.addEventListener('click', startGame);
answerElement.addEventListener('keyup', (event) => {
    if (event.key === "Enter") {
        checkAnswer()
    }
});