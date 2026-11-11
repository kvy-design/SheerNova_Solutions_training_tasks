import React from "react";

export default function Timeline({ events }) {
  return (
    <div>
      {events.map((event) => (
        <div id={event.id}>
          <b>{event.date}</b>
          <p>{event.description}</p>
        </div>
      ))}
    </div>
  );
}
