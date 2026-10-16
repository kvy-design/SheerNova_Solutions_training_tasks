// negative if a ranks better than b: higher percentage first, then faster time
export function compareScores(a, b) {
  const pa = a.score / a.total;
  const pb = b.score / b.total;
  return pb - pa || a.timeTaken - b.timeTaken;
}

// 272 -> "4:32"
export function formatTime(totalSeconds) {
  const m = Math.floor(totalSeconds / 60);
  const s = String(totalSeconds % 60).padStart(2, "0");
  return `${m}:${s}`;
}