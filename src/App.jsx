import { useState } from "react";
import "./App.css";
import Quiz from "./assets/components/Quiz";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="App-container container mt-5 d-flex flex-column  bg-light p-5 rounded w-50">
        <div className="mb-4 align-items-center container text-center">
          <h1>Quiz App</h1>
          <p className="lead">  
            Test your knowledge with our fun and interactive quiz!
          </p>
        </div>
        <Quiz />
      </div>
      
    </>
  );
}

export default App;
