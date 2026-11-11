import React from "react";

export default function StarRating({rating}) {
  const star = [1, 2, 3, 4, 5];
  return (
    <div>
      {star.map((s) => (
        <p id={s}>{s <= rating ? "★" : "☆"}</p>
      ))}
    </div>
  );
}
