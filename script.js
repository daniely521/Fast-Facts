let timer = 30;
let score = 0;
let currentQuestionIndex = 0;
let interval;
let rockScore = 0;

const questions = [
    { question: "What is the capital of France", answer: "Paris"},
    { question: "How many legs does a spider have", answer: "8"},
    { question: "What is 5+5?", answer: "10"},
    { question: "Who wrote 'Romeo and Juliet'?", answer: "Shakespeare"},
    { question: "What is the capital of Germany", answer: "Berlin"},
    { question: "What is the chemical symbol for water?", answer: "H2O"},
    { question: "What is 12x8?", answer: "96"},
    { question: "Who was the first president of the USA", answer: "George Washington"},
    { question: "What is the largest desert in the world", answer: "Sahara"},
    { question: "What is the highest score in bowling?", answer: "300"},
    { question: "What is the name of the wizarding school in Harry Potter", answer: "Hogwarts"},
    { question: "What is the highest grossing movie of all time?", answer: "Avatar"},
    { question: "Which band wrote 'Bohemian Rhapsody'?", answer: "Queen"},
    { question: "What is the main ingredient in guacamole?", answer: "Avocado"},
    { question: "Who invented the telephone?", answer: "Graham Bell"},
    { question: "What is the fastest animal on land?", answer: "cheetah"},
    { question: "Who created Mickey Mouse?", answer: "Walt Disney"},
    { question: "What is the rarest blood type?", answer: "AB"},
    { question: "What comes after a trillion?", answer: "quadrillion"},
    { question: "What is the 'Friends' coffee shop called?", answer: "Central Perk"},
    { question: "How many planets in our solar system?", answer: "8"},
    { question: "Which mammal can fly?", answer: "bat"},
    { question: "What is the biggest festival in Brazil", answer: "Carnival"},
    { question: "How many continents are there", answer: "7"},
    { question: "Who developed the theory of relativity", answer: "Einstein"},
    { question: "What is the square root of 144", answer: "12"},
    { question: "What year did WWII end?", answer: "1945"},
    { question: "What country has the most population", answer: "India"},
    { question: "How many players on a soccer team?", answer: "11"},
    { question: "What is the name of the hobbit in 'The Hobbit'", answer: "Bilbo Baggins"},
    { question: "Which movie has the quote 'I'll be back'", answer: "Terminator"},
    { question: "Who sang shape of you?", answer: "Ed Sheeran"},
    { question: "Which country is known for its sushi", answer: "Japan"},
    { question: "What is the most used programming language?", answer: "Javascript"},
    { question: "What animal is known for its mimicking sounds?", answer: "parrot"},
    { question: "What is Spongebob's snail called", answer: "Gary"},
    { question: "Which language has the most native speakers?", answer: "Chinese"},
    { question: "Which word is spelt incorrectly in every dictionary", answer: "incorrectly"},
    { question: "What is the longest running animated TV show?", answer: "Simpsons"},
    { question: "What is the hottest planet in the solar system?", answer: "Venus"},
    { question: "What is the baby kangaroo called?", answer: "Joey"},
    { question: "Which country celebrates thanksgiving in October?", answer: "Canada"},
    { question: "What is the largest ocean in the world?", answer: "Pacific"},
    { question: "What do plants absorb during photosynthesis?", answer: "carbon dioxide"},
    { question: "What is pi to 2 decimal places?", answer: "3.14"},
    { question: "What empire was ruled by Julius Caesar", answer: "Roman"},
    { question: "Which river runs through egypt", answer: "Nile"},
    { question: "What sports use 'Love' for 0 points?", answer: "Tennis"},
    { question: "Which song is most streamed on spotify?", answer: "Blinding Lights"},
    { question: "What fruit is the 'king of fruits'?", answer: "Durian"},
    { question: "What does HTTP stand for?", answer: "Hypertext Transfer Protocol"},
    { question: "What is the tallest tree species?", answer: "redwood"},
    { question: "What is the name of batman's butler?", answer: "Alfred"},
    { question: "What is the national animal of Scotland?", answer: "Unicorn"},
    { question: "In which city is Strangers Things set?", answer: "Hawkins"},
    { question: "Which planet has the largest rings?", answer: "Saturn"},
    { question: "What is a group of crows called", answer: "murder"},
    { question: "What is the name of the 'Jewish festival of lights'", answer: "Hannukah"},
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
    scoreElement.classList.remove('hidden')
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
    scoreElement.classList.add("hidden")
}

startButton.addEventListener('click', startGame);
answerElement.addEventListener('keyup', (event) => {
    if (event.key === "Enter") {
        checkAnswer()
    }
});