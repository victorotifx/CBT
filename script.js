import questions from './questions.js';

let currentQuestion = 0;
let score = 0;

// Timer: 90 minutes
let totalTime = 90 * 60; // seconds
const timerDisplay = document.getElementById('timer');
const quizDiv = document.getElementById('quiz');
const resultDiv = document.getElementById('result');
const nextBtn = document.getElementById('nextBtn');

function startTimer() {
  const interval = setInterval(() => {
    totalTime--;
    let minutes = Math.floor(totalTime / 60);
    let seconds = totalTime % 60;
    timerDisplay.textContent = `${minutes} : ${seconds < 10 ? '0' + seconds : seconds}`;
    if (totalTime <= 0) {
      clearInterval(interval);
      alert("Time's up!");
      showResult();
    }
  }, 1000);
}

function loadQuestion() {
  if (currentQuestion >= questions.length) {
    showResult();
    return;
  }

  const q = questions[currentQuestion];
  quizDiv.innerHTML = `<h3>${q.question}</h3>`;
  q.options.forEach(opt => {
    const btn = document.createElement('button');
    btn.textContent = opt;
    btn.onclick = () => checkAnswer(opt);
    quizDiv.appendChild(btn);
  });
}

function checkAnswer(answer) {
  if (answer === questions[currentQuestion].answer) {
    score++;
  }
  nextQuestion();
}

function nextQuestion() {
  currentQuestion++;
  loadQuestion();
}

function showResult() {
  quizDiv.innerHTML = '';
  nextBtn.style.display = 'none';
  resultDiv.textContent = `Your score is: ${score} / ${questions.length}`;
}

// Start
startTimer();
loadQuestion();

nextBtn.onclick = () => nextQuestion();
