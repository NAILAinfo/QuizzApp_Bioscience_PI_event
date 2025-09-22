import React, { useState } from "react";
import QuizApp from "./QuizApp";

const HomePage: React.FC = () => {
  const [startQuiz, setStartQuiz] = useState(false);

  if (startQuiz) {
    return <QuizApp />;
  }

  return (
    <>
      <div id="page-container">
        <div id="card">
          <img src="/logo.jpg" alt="BioScience Logo" id="card-image" />

          <h1 id="card-title">Défi Quiz BioScience</h1>
          <p id="card-subtitle">Testez vos connaissances en sciences de la vie</p>

          <div id="features">
            <p><span className="dot green"></span>24 questions à choix multiples</p>
            <p><span className="dot blue"></span>40 secondes par question</p>
            <p><span className="dot orange"></span>Score en temps réel</p>
          </div>

          <div id="description">
            
            Prêt à explorer le monde fascinant des biosciences? De la biologie
            cellulaire à la génétique moléculaire, testez vos connaissances sur
            les éléments constitutifs de la vie!
          </div>

          <button id="start-button" onClick={() => setStartQuiz(true)}>
            Démarrer le quiz
          </button>
        </div>
      </div>

      <style>{`
        /* Container global */
        #page-container {
          display: flex;
          align-items: center;
          justify-content: center;
          height: 100vh;
          background: linear-gradient(to right, #f0fff4, #ebf8ff);
          font-family: 'Poppins', sans-serif;
        }

        /* Carte unique */
        #card {
          background: #fff;
          border-radius: 16px;
          padding: 1.2rem 1.5rem;
          box-shadow: 0 6px 16px rgba(0, 0, 0, 0.1);
          width: 650px;      /* ✅ élargi la carte */
          max-width: 95%;
          text-align: center;
          box-sizing: border-box;
        }

        /* Logo */
        #card-image {
          width: 90px;
          height: 90px;
          border-radius: 50%;
          object-fit: cover;
          margin-bottom: 0.8rem;
        }

        /* Titre */
        #card-title {
          font-size: 1.6rem;
          font-weight: 700;
          color: #059669;
          margin: 0;
        }

        #card-subtitle {
          font-size: 1rem;
          color: #444;
          margin: 0.3rem 0 1rem;
        }

        /* Caractéristiques */
        #features {
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
          font-size: 0.95rem;
          color: #333;
          margin-bottom: 1rem;
          text-align: left;
        }

        .dot {
          display: inline-block;
          width: 10px;
          height: 10px;
          border-radius: 50%;
          margin-right: 6px;
        }
        .green { background-color: #16a34a; }
        .blue { background-color: #2563eb; }
        .orange { background-color: #ea580c; }

        /* Description */
        #description {
          background: #f0fdf4;
          padding: 0.8rem;
          border-radius: 8px;
          font-size: 0.9rem;
          color: #065f46;
          margin-bottom: 1rem;
          text-align: justify;
        }

        /* Bouton */
        #start-button {
          background: linear-gradient(to right, #10b981, #3b82f6);
          color: #fff;
          font-size: 1rem;
          font-weight: 600;
          padding: 10px;
          border: none;
          border-radius: 8px;
          cursor: pointer;
          width: 100%;
          transition: transform 0.2s ease, opacity 0.2s ease;
        }
        #start-button:hover {
          transform: translateY(-2px);
          opacity: 0.95;
        }
      `}</style>
    </>
  );
};

export default HomePage;
