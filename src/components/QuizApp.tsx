import React, { useState, useEffect } from "react";
import Result from "./Result";

const questions = [
  {
    id: "Q1",
    question: "Combien de litres d'eau un adulte doit-il boire par jour en moyenne ?",
    option1: "0.5 L",
    option2: "1 L",
    option3: "1.5-2 L",
    correctAnswer: "1.5-2 L",
  },
  {
    id: "Q2",
    question: "Quelle vitamine est produite par le corps grâce au soleil ?",
    option1: "Vitamine A",
    option2: "Vitamine D",
    option3: "Vitamine C",
    correctAnswer: "Vitamine D",
  },
  {
    id: "Q3",
    question: "Quel est le sport le plus complet pour travailler presque tous les muscles ?",
    option1: "Le football",
    option2: "La natation",
    option3: "Le basketball",
    correctAnswer: "La natation",
  },
  // ... ajoute toutes les questions restantes ici
];

const QuizApp: React.FC = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [timeLeft, setTimeLeft] = useState(40); // 40 secondes par question

  useEffect(() => {
    if (timeLeft <= 0) {
      handleNext();
      return;
    }
    const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
    return () => clearTimeout(timer);
  }, [timeLeft]);

  const handleAnswerClick = (answer: string) => {
    setSelectedAnswer(answer);
  };

  const handleNext = () => {
    if (selectedAnswer && selectedAnswer === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }

    setSelectedAnswer(null);

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
      setTimeLeft(40); // reset timer
    } else {
      setShowResult(true);
    }
  };

  if (showResult) {
    return (
      <Result
        score={score}
        total={questions.length}
        onRestart={() => {
          setScore(0);
          setCurrentQuestion(0);
          setShowResult(false);
          setTimeLeft(40);
        }}
      />
    );
  }

  const q = questions[currentQuestion];

  return (
    <div className="quiz-container">
      {/* Barre d'état */}
      <div className="status-bar">
        <span>🏆 Score {score}/{questions.length}</span>
        <span>📘 Question {currentQuestion + 1}/{questions.length}</span>
      </div>

      <div className="progress">
        <div
          className="progress-fill"
          style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
        ></div>
      </div>

      {/* Timer */}
      <div className="timer-bar">
        <span>⏱ Temps restant</span>
        <div className="time-fill">
          <div
            className="time-progress"
            style={{ width: `${(timeLeft / 40) * 100}%` }}
          ></div>
        </div>
        <span>{timeLeft}s</span>
      </div>

      {/* Question */}
      <div className="question-card">
        <h3>{q.question}</h3>

        <div className="options">
          {[q.option1, q.option2, q.option3].map((option, index) => {
            let buttonClass = "option-button";
            if (selectedAnswer) {
              if (option === q.correctAnswer) {
                buttonClass += " correct";
              } else if (option === selectedAnswer) {
                buttonClass += " wrong";
              }
            }

            return (
              <button
                key={index}
                className={buttonClass}
                onClick={() => handleAnswerClick(option)}
                disabled={!!selectedAnswer}
              >
                {option}
              </button>
            );
          })}
        </div>
      </div>

      <button className="next-button" onClick={handleNext}>
        {currentQuestion + 1 === questions.length ? "Terminer" : "Suivante"}
      </button>

      <style>{`
        .quiz-container {
          max-width: 700px;
          margin: 2rem auto;
          padding: 1rem;
          font-family: "Poppins", sans-serif;
        }

        .status-bar {
          display: flex;
          justify-content: space-between;
          background: #f9fafb;
          padding: 0.8rem 1rem;
          border-radius: 10px;
          margin-bottom: 0.5rem;
          font-size: 0.9rem;
          color: #374151;
          box-shadow: 0 2px 6px rgba(0,0,0,0.05);
        }

        .progress {
          background: #e5e7eb;
          height: 6px;
          border-radius: 5px;
          margin-bottom: 1rem;
        }

        .progress-fill {
          background: #3b82f6;
          height: 100%;
          border-radius: 5px;
        }

        .timer-bar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          background: #f9fafb;
          padding: 0.8rem 1rem;
          border-radius: 10px;
          margin-bottom: 1.5rem;
          font-size: 0.9rem;
          color: #1f2937;
          box-shadow: 0 2px 6px rgba(0,0,0,0.05);
        }

        .time-fill {
          flex: 1;
          margin: 0 1rem;
          background: #e5e7eb;
          height: 8px;
          border-radius: 5px;
          overflow: hidden;
        }

        .time-progress {
          background: #111827;
          height: 100%;
        }

        .question-card {
          background: white;
          border-radius: 12px;
          padding: 1.5rem;
          box-shadow: 0px 4px 12px rgba(0,0,0,0.1);
          margin-bottom: 1.5rem;
        }

        h3 {
          margin-bottom: 1rem;
          font-size: 1.2rem;
          color: #111827;
        }

        .options {
          display: flex;
          flex-direction: column;
          gap: 0.8rem;
        }

        .option-button {
          background: #f9fafb;
          border: 2px solid #e5e7eb;
          border-radius: 10px;
          padding: 12px;
          text-align: left;
          font-size: 1rem;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .option-button:hover {
          background: #e0f2fe;
          border-color: #3b82f6;
        }

        .option-button.correct {
          background-color: #16a34a; /* vert */
          color: white;
          border-color: #16a34a;
        }

        .option-button.wrong {
          background-color: #ef4444; /* rouge */
          color: white;
          border-color: #b91c1c;
        }

        .next-button {
          background: linear-gradient(to right, #10b981, #3b82f6);
          color: white;
          font-size: 1rem;
          font-weight: 600;
          padding: 12px 20px;
          border: none;
          border-radius: 10px;
          cursor: pointer;
          width: 100%;
          transition: transform 0.2s ease, opacity 0.3s ease;
        }

        .next-button:hover {
          transform: translateY(-2px);
          opacity: 0.9;
        }
      `}</style>
    </div>
  );
};

export default QuizApp;
