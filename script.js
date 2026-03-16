import questions from './questions.js';

let currentQuestion = 0;
let score = 0;

// Keep track of user's selected answers
let userAnswers = new Array(questions.length).fill(null);

const quizDiv = document.getElementById('quiz');
const resultDiv = document.getElementById('result');
const nextBtn = document.getElementById('nextBtn');
const prevBtn = document.getElementById('prevBtn');

// Timer (90 mins)
let totalTime = 90 * 60;
const timerDisplay = document.getElementById('timer');

function startTimer() {
  const interval = setInterval(() => {
    totalTime--;
    let minutes = Math.floor(totalTime / 60);
    let seconds = totalTime % 60;
    timerDisplay.textContent = `${minutes} : ${seconds < 10 ? '0'+seconds : seconds}`;
    if(totalTime <= 0){
      clearInterval(interval);
      alert("Time's up!");
      showResult();
    }
  }, 1000);
}

function loadQuestion() {
  const q = questions[currentQuestion];
  quizDiv.innerHTML = `<h3>Q${currentQuestion+1}: ${q.question}</h3>`;

  q.options.forEach(opt => {
    const btn = document.createElement('button');
    btn.textContent = opt;

    // Highlight previously selected answer
    if(userAnswers[currentQuestion] === opt){
      btn.style.backgroundColor = "lightgreen";
    }

    btn.onclick = () => {
      userAnswers[currentQuestion] = opt;
      loadQuestion(); // reload to highlight selection
    }

    quizDiv.appendChild(btn);
  });

  // Hide prev button on first question
  prevBtn.style.display = currentQuestion === 0 ? 'none' : 'inline-block';
  // Hide next button on last question
  nextBtn.textContent = currentQuestion === questions.length - 1 ? 'Submit' : 'Next';
}

function showResult() {
  // Calculate score
  score = 0;
  userAnswers.forEach((ans, i) => {
    if(ans === questions[i].answer) score++;
  });

  quizDiv.innerHTML = '';
  prevBtn.style.display = 'none';
  nextBtn.style.display = 'none';
  resultDiv.textContent = `Your score is: ${score} / ${questions.length}`;
}

// Navigation
nextBtn.onclick = () => {
  if(currentQuestion < questions.length - 1){
    currentQuestion++;
    loadQuestion();
  } else {
    showResult();
  }
}

prevBtn.onclick = () => {
  if(currentQuestion > 0){
    currentQuestion--;
    loadQuestion();
  }
}

// Start
startTimer();
loadQuestion();
