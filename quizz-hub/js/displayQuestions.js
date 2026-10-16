import { categories, questionsList } from "./data.js";

let index = 0;
let selectedQuestions = [];
let selectedAnswers = [];
let userName = "";
let selectedCategory;

const SECONDS_PER_QUESTION = 20;
let timerId = null;
let timeLeft = 0;
let timeLimit = 0;

//timer
function showTime() {
  const m = String(Math.floor(timeLeft / 60)).padStart(2, "0");
  const s = String(timeLeft % 60).padStart(2, "0");
  const timerEl = document.getElementById("timer");
  timerEl.textContent = `${m}:${s}`;
  timerEl.classList.toggle("low", timeLeft <= 10);
}

//timer starter
function startTimer() {
  clearInterval(timerId);
  timeLeft = timeLimit;
  showTime();

  timerId = setInterval(() => {
    timeLeft--;
    showTime();
    if (timeLeft <= 0) {
      finishQuiz();
    }
  }, 1000);
}

//get selected option
document.getElementById("option-list").addEventListener("click", (e) => {
  const btn = e.target.closest(".select-opt");
  if (!btn) return;
  selectedAnswers[index] = btn.value;
  document
    .querySelectorAll("#option-list .select-opt")
    .forEach((b) => b.classList.remove("selected"));
  btn.classList.add("selected");
});

//clicks to next question
document.getElementById("next-question").addEventListener("click", () => {
  if (selectedAnswers[index] === undefined) {
    alert("Please select an option first!");
    return;
  }
  console.log(selectedAnswers[index]);
  index++;
  if (index < selectedQuestions.length) {
    renderQuestions();
  } else {
    finishQuiz();
  }

  // if (index === selectedQuestions.length) {
  //   document.getElementById("question-container").hidden = true;
  //   index = 0;
  // }
});

//after quiz end
function finishQuiz() {
  //final score
  clearInterval(timerId);
  let date = new Date().toLocaleDateString();
  const timeTaken = timeLimit - timeLeft;
  const score = selectedQuestions.filter((q, i) => {
    return q["correct-ans"] === selectedAnswers[i];
  });
  const score_length = score.length;
  const incorrect_length = selectedQuestions.length - score_length;
  
  const { rank, players } = saveScore(
    userName,
    selectedCategory,
    score_length,
    selectedQuestions.length,
    timeTaken,
  );

  document.getElementById("result-text").textContent =
    `${userName}, you scored ${score} / ${selectedQuestions.length}`;
  document.getElementById("result-rank").textContent =
    `Rank #${rank} of ${players}`;
  document.getElementById("result-dialog").showModal();
  document.getElementById("question-container").hidden = true;
  // alert(`${userName}, you scored ${score_length}/${selectedQuestions.length}`);
  document.getElementById("result-text").textContent =
    `${userName}, you scored ${score_length} / ${selectedQuestions.length} , total time taken : ${timeTaken} , ${date} , incorrect : ${incorrect_length}`;
  document.getElementById("result-dialog").showModal();
  index = 0;
}

//save scores
function saveScore(name, category, score, total, timeTaken) {
  const allScores = JSON.parse(localStorage.getItem("quizScores") || "[]");

  const entry = {
    name,
    category,
    score,
    total,
    timeTaken,
    date: new Date().toLocaleDateString(),
  };
  allScores.push(entry);
  localStorage.setItem("quizScores", JSON.stringify(allScores));

  // rank = 1 + number of results that beat this one
  const better = allScores.filter((s) => compareScores(s, entry) < 0).length;
  return { rank: better + 1, players: allScores.length };
}

// returns negative if a ranks better than b
function compareScores(a, b) {
  const pa = a.score / a.total;
  const pb = b.score / b.total;
  return pb - pa || a.timeTaken - b.timeTaken;
}

//display questions
export function displayQuestions() {
  document.getElementById("start-quiz").close();
  document.getElementById("question-container").hidden = false;
  userName = document.getElementById("user-name").value.trim();
  selectedCategory = document.getElementById("select-cat").value;
  let get_level = document.getElementById("select-level").value;
  index = 0;
  selectedAnswers = [];

  if (get_level === "all") {
    selectedQuestions = [
      ...questionsList[selectedCategory]["easy"],
      ...questionsList[selectedCategory]["moderate"],
      ...questionsList[selectedCategory]["hard"],
    ];
  } else {
    selectedQuestions = questionsList[selectedCategory][get_level];
  }

  timeLimit = selectedQuestions.length * SECONDS_PER_QUESTION;

  renderQuestions();
  startTimer();
}

//render one question after next button clicks
function renderQuestions() {
  document.getElementById("question-number").innerHTML =
    `${index + 1} /${selectedQuestions.length}`;

  document.getElementById("question-text").innerHTML =
    selectedQuestions[index].question;

  //   document.getElementById("option-list").innerHTML = "";
  let options = "";
  selectedQuestions[index].options.forEach((element) => {
    options += `<li><button class='select-opt' value="${element}">${element}</button></li>`;
  });
  document.getElementById("option-list").innerHTML = options;
}
