import React from "react";

function Result({ questionbank }) {

  function calculateScore() {
    let total = 0;
    questionbank.forEach(q => {
      if (q.selectedOption === q.answer) {
        total++;
      }
    });
    return total;
  }

  const score = calculateScore();

  return (
    <div className="container mt-5">
      <div className="card text-center shadow p-5">

        <h2 className="mb-3 text-success">Quiz Completed 🎉</h2>

        <h4 className="mb-4">
          Your Score: {score} / {questionbank.length}
        </h4>

        <button
          className="btn btn-primary"
          onClick={() => window.location.reload()}
        >
          Retake Quiz
        </button>

      </div>
    </div>
  );
}

export default Result;