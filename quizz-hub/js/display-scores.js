import { compareScores, formatTime } from "./formate.js";

// names are typed by users, so escape them before putting them in innerHTML
// function escapeHtml(text) {
//   const div = document.createElement("div");
//   div.textContent = text;
//   return div.innerHTML;
// }

export function renderScores() {
  const scores = JSON.parse(localStorage.getItem("quizScores") || "[]");
  scores.sort(compareScores);

  const body = document.getElementById("scores-body");

  if (scores.length === 0) {
    body.innerHTML = `<tr><td colspan="6" class="empty">No scores yet. Finish a quiz to appear here.</td></tr>`;
    return;
  }

  body.innerHTML = scores
    .map(
      (s, i) => `
      <tr>
        <td>${i + 1}</td>
        <td>${s.name}</td>
        <td>${s.category}</td>
        <td>${s.score}/${s.total}</td>
        <td>${formatTime(s.timeTaken)}</td>
        <td>${s.date}</td>
      </tr>`,
    )
    .join("");
}
