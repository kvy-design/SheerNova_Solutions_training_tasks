import { useState } from "react";
import heroImg from "./assets/hero.png";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <h1>Kavya Patel</h1>
        <h2>B.Tech CSD Student</h2>
        <p>
          I am a Computer Science and Design student who is learning React,
          Java, Python, and web development.
        </p>
      </div>
    </>
  );
}

export default App;
