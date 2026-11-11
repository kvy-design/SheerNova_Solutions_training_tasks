import React, { useState } from "react";

export default function FAQ() {
const [openId , setOpenId] = useState(null)
  const questions = [
    {
      id: 1,
      question: "What is React?",
      answer: "React is a JavaScript library for building user interfaces.",
    },
    {
      id: 2,
      question: "What are props?",
      answer: "Props are data passed from a parent component to a child.",
    },
    {
      id: 3,
      question: "What is JSX?",
      answer:
        "JSX is a syntax that lets you write HTML-like code in JavaScript.",
    },
  ];
  return (
    <div>
      {questions.map((q) => (
        <div id={q.id}>
            
            <button onClick={() => setOpenId(openId === q.id ? null : q.id)}>{q.question}</button>
            {openId === q.id && q.answer}
        </div>
      ))}
    </div>
  );
}
