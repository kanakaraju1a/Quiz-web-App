import { useState } from "react";
import Result from "./result";

function Quiz() {

    const questionbank = [
        { question:"What is the capital of India?", options:["Delhi","Mumbai","Kolkata","Chennai"], answer:"Delhi" },
        { question:"What is the capital of USA?", options:["New York","Washington D.C.","Los Angeles","Chicago"], answer:"Washington D.C." },
        { question:"What is the capital of France?", options:["Paris","Lyon","Marseille","Nice"], answer:"Paris" },
        { question:"What is the capital of Japan?", options:["Tokyo","Osaka","Kyoto","Hiroshima"], answer:"Tokyo" },
        { question:"What is the capital of Australia?", options:["Sydney","Melbourne","Canberra","Brisbane"], answer:"Canberra" },
        { question:"What is the capital of Canada?", options:["Toronto","Vancouver","Ottawa","Montreal"], answer:"Ottawa" },
        { question:"What is the capital of Germany?", options:["Berlin","Munich","Frankfurt","Hamburg"], answer:"Berlin" },
        { question:"What is the capital of Italy?", options:["Rome","Milan","Naples","Turin"], answer:"Rome" },
        { question:"What is the capital of Brazil?", options:["Rio de Janeiro","São Paulo","Brasília","Salvador"], answer:"Brasília" },
        { question:"What is the capital of Russia?", options:["Moscow","Saint Petersburg","Novosibirsk","Yekaterinburg"], answer:"Moscow" },
    ];

    const [questions, setQuestions] = useState(questionbank);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [isQuizCompleted, setIsQuizCompleted] = useState(false);

    function handleSelectOption(option) {
        const updatedQuestions = [...questions];
        updatedQuestions[currentQuestionIndex].selectedOption = option;
        setQuestions(updatedQuestions);
    }

    function Next() {
        if (currentQuestionIndex === questions.length - 1) {
            setIsQuizCompleted(true);
        } else {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        }
    }

    function Previous() {
        if (currentQuestionIndex > 0) {
            setCurrentQuestionIndex(currentQuestionIndex - 1);
        }
    }

    if (isQuizCompleted) {
        return <Result questionbank={questions} />;
    }

    return (
        <div className="container mt-5">
            <div className="card shadow p-4">

                {/* Question */}
                <h4 className="mb-4">
                    Question {currentQuestionIndex + 1} of {questions.length}
                </h4>

                <h5 className="mb-3">
                    {questions[currentQuestionIndex].question}
                </h5>

                {/* Options */}
                <div className="list-group mb-4">
                    {questions[currentQuestionIndex].options.map((option, index) => (
                        <button
                            key={index}
                            className={`list-group-item list-group-item-action 
                                ${questions[currentQuestionIndex].selectedOption === option ? "active" : ""}`}
                            onClick={() => handleSelectOption(option)}
                        >
                            {option}
                        </button>
                    ))}
                </div>

                {/* Selected Option */}
                <div className="alert alert-info text-center">
                    Selected: {questions[currentQuestionIndex].selectedOption || "None"}
                </div>

                {/* Navigation Buttons */}
                <div className="d-flex justify-content-between">
                    <button
                        className="btn btn-secondary"
                        onClick={Previous}
                        disabled={currentQuestionIndex === 0}
                    >
                        Previous
                    </button>

                    <button
                        className="btn btn-primary"
                        onClick={Next}
                        disabled={!questions[currentQuestionIndex].selectedOption}
                    >
                        {currentQuestionIndex === questions.length - 1 ? "Submit" : "Next"}
                    </button>
                </div>

            </div>
        </div>
    );
}

export default Quiz;