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
  {
    id: "Q4",
    question: "Quelle est la fréquence cardiaque normale au repos chez un adulte en bonne santé ?",
    option1: "30-50 battements/minute",
    option2: "60-100 battements/minute",
    option3: "120-150 battements/minute",
    correctAnswer: "60-100 battements/minute",
  },
  {
    id: "Q5",
    question: "Combien de minutes d'activité physique modérée par semaine recommande l'OMS ?",
    option1: "60 minutes",
    option2: "150 minutes",
    option3: "300 minutes",
    correctAnswer: "150 minutes",
  },
  {
    id: "Q6",
    question: "Quel aliment est riche en calcium ?",
    option1: "Le fromage",
    option2: "Les pâtes",
    option3: "Le poulet",
    correctAnswer: "Le fromage",
  },
  {
    id: "Q7",
    question: "Quel est le principal bienfait du sport sur le cerveau ?",
    option1: "Améliorer la mémoire et réduire le stress",
    option2: "Faire pousser les cheveux",
    option3: "Changer la couleur des yeux",
    correctAnswer: "Améliorer la mémoire et réduire le stress",
  },
  {
    id: "Q8",
    question: "Quelle est la meilleure boisson après un effort sportif ?",
    option1: "Un soda",
    option2: "L'eau",
    option3: "Le café",
    correctAnswer: "L'eau",
  },
  {
    id: "Q9",
    question: "Quel est le muscle le plus puissant du corps humain ?",
    option1: "Le biceps",
    option2: "Le quadriceps",
    option3: "Le masséter (mâchoire)",
    correctAnswer: "Le masséter (mâchoire)",
  },
  {
    id: "Q10",
    question: "Quel est l'organe principalement affecté par le tabagisme ?",
    option1: "Le cœur",
    option2: "Les poumons",
    option3: "Le foie",
    correctAnswer: "Les poumons",
  },
  {
    id: "Q11",
    question: "Quelle est la durée moyenne d'une nuit de sommeil recommandée pour un adulte ?",
    option1: "4-5 heures",
    option2: "7-8 heures",
    option3: "10-12 heures",
    correctAnswer: "7-8 heures",
  },
  {
    id: "Q12",
    question: "Quel minéral est essentiel pour éviter les crampes musculaires ?",
    option1: "Le magnésium",
    option2: "Le fer",
    option3: "Le zinc",
    correctAnswer: "Le magnésium",
  },
  {
    id: "Q13",
    question: "Quel est le sport le plus pratiqué dans le monde ?",
    option1: "Le basketball",
    option2: "Le football",
    option3: "Le tennis",
    correctAnswer: "Le football",
  },
  {
    id: "Q14",
    question: "Quelle hormone appelée aussi « hormone du bonheur » est libérée après une activité sportive ?",
    option1: "L'adrénaline",
    option2: "La sérotonine",
    option3: "Les endorphines",
    correctAnswer: "Les endorphines",
  },
  {
    id: "Q15",
    question: "Quel est l'indice utilisé pour mesurer l'équilibre entre le poids et la taille ?",
    option1: "L'IMC (Indice de Masse Corporelle)",
    option2: "Le rythme cardiaque",
    option3: "Le taux de glycémie",
    correctAnswer: "L'IMC (Indice de Masse Corporelle)",
  },
  {
    id: "Q16",
    question: "Quelle boisson est déconseillée avant une compétition sportive ?",
    option1: "L'eau",
    option2: "Le jus de fruits",
    option3: "Le café fort",
    correctAnswer: "Le café fort",
  },
  {
    id: "Q17",
    question: "Quelle est la température normale du corps humain ?",
    option1: "36-37 °C",
    option2: "34-35 °C",
    option3: "38-39 °C",
    correctAnswer: "36-37 °C",
  },
  {
    id: "Q18",
    question: "Quel sport est le plus recommandé pour les personnes souffrant de problèmes articulaires ?",
    option1: "Course à pied",
    option2: "Natation",
    option3: "Rugby",
    correctAnswer: "Natation",
  },
  {
    id: "Q19",
    question: "Quelle est la principale fonction des globules rouges ?",
    option1: "Transporter l'oxygène",
    option2: "Lutter contre les infections",
    option3: "Aider à la digestion",
    correctAnswer: "Transporter l'oxygène",
  },
  {
    id: "Q20",
    question: "Quel est le principal risque d'une consommation excessive de sucre ?",
    option1: "Le diabète",
    option2: "L'anémie",
    option3: "La perte de mémoire",
    correctAnswer: "Le diabète",
  },
  {
    id: "Q21",
    question: "Quel organe filtre le sang pour éliminer les déchets et toxines ?",
    option1: "Le cœur",
    option2: "Le foie",
    option3: "Les reins",
    correctAnswer: "Les reins",
  },
  {
    id: "Q22",
    question: "Quel sport est considéré comme un mélange de cardio danse et fitness ?",
    option1: "Yoga",
    option2: "Zumba",
    option3: "Boxe",
    correctAnswer: "Zumba",
  },
  {
    id: "Q23",
    question: "Quelle est la durée idéale d'un échauffement avant une activité sportive ?",
    option1: "2 minutes",
    option2: "10 minutes",
    option3: "30 minutes",
    correctAnswer: "10 minutes",
  },
  {
    id: "Q24",
    question: "Quel nutriment est la principale source d'énergie pour le corps ?",
    option1: "Les protéines",
    option2: "Les glucides",
    option3: "Les lipides",
    correctAnswer: "Les glucides",
  },
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
    if (selectedAnswer) {
      if (selectedAnswer === questions[currentQuestion].correctAnswer) {
        setScore(score + 1);
      }
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
          {[q.option1, q.option2, q.option3].map((option, index) => (
            <button
              key={index}
              className={`option-button ${selectedAnswer === option ? "selected" : ""}`}
              onClick={() => handleAnswerClick(option)}
            >
              {option}
            </button>
          ))}
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

        .option-button.selected {
          background: #3b82f6;
          color: white;
          border-color: #2563eb;
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
