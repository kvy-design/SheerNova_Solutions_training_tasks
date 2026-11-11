import React from "react";

export default function Tag({ varients, children }) {
  const colors = {
    success: "green",
    warning: "orange",
    error: "red",
    info: "blue",
    neutral: "gray",
  };
  return (
    <div>
      <span
        style={{
          color: colors[varients],
          display: "inline-block",
        }}
      >{children}</span>
    </div>
  );
}
