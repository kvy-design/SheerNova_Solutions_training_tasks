import { fetchCategories } from "./fetch.js";
import { displayQuestions } from "./displayQuestions.js";
import { renderScores } from "./display-scores.js";

document.addEventListener("DOMContentLoaded", () => {
  fetchCategories();

  const dialog = document.getElementById("start-quiz");
  document.querySelector(".start-quizz").addEventListener("click", () => {
    dialog.showModal();
  });
  dialog.addEventListener("click", (event) => {
    if (event.target === dialog) {
      dialog.close();
    }
  });

  document.getElementById("name-form").addEventListener("submit", (event) => {
    event.preventDefault();
    const userName = document.getElementById("user-name").value;
    if (userName.trim() === "") {
      alert("user name is empty");
      return;
    }
    console.log(userName);
    displayQuestions();
    dialog.close();
  });

  document.getElementById("cat-list").addEventListener("click", (e) => {
    const card = e.target.closest(".cat-card");
    if (!card) return;

    document.getElementById("select-cat").value = card.dataset.cat; // pick category
    document.getElementById("select-level").value = "all"; // all values
    dialog.showModal(); // ask for the name
  });

    // ---- switch between Home and High Scores ----
  function showView(name) {
    document.getElementById("home-view").hidden = name !== "home";
    document.getElementById("high-score-container").hidden = name !== "scores";

    document.querySelector(".home").classList.toggle("active", name === "home");
    document.querySelector(".highscores").classList.toggle("active", name === "scores");

    if (name === "scores") renderScores();
  }

  document.querySelector(".home").addEventListener("click", () => showView("home"));
  document.querySelector(".highscores").addEventListener("click", () => showView("scores"));

  document.getElementById("clear-scores").addEventListener("click", () => {
    if (confirm("Delete all saved scores?")) {
      localStorage.removeItem("quizScores");
      renderScores();
    }
  });
});
