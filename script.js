let timer = 30;
let score = 0;
let currentQuestionIndex = 0;
let interval;

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

function startGame() {
    score = 0;
    currentQuestionIndex = 0;
    timer = 30;
    startButton.disabled = true;
    answerElement.disabled = false;
    answerElement.value = "";
    scoreElement.textContent = `Score: ${score}`;
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
    const userAnswer = answerElement.value;
    if (userAnswer.toLowerCase() === questions[currentQuestionIndex].answer.toLowerCase()) {
        score++;
        scoreElement.textContent = `Score: ${score}`;
    }
    answerElement.value = "";
    currentQuestionIndex++;
    loadQuestion();
}

function endGame() {
    clearInterval(interval);
    questionElement.textContent = "Game over! Your final score is:" + score;
    startButton.disabled = false;
    answerElement.disabled = true;
    timer = 30;
    timerElement.textContent = timer;
}

startButton.addEventListener('click', startGame);
answerElement.addEventListener('keyup', (event) => {
    if (event.key === "Enter") {
        checkAnswer()
    }
});