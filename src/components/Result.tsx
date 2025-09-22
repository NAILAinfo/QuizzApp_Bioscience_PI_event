import React from "react";

interface ResultProps {
  score: number;
  total: number;
  onRestart: () => void;
}

const Result: React.FC<ResultProps> = ({ score, total, onRestart }) => {
  const percentage = Math.round((score / total) * 100);

  return (
    <div className="result-container">
      <h2>🎉 Quiz terminé !</h2>
      <p>Ton score : {score} / {total} ({percentage}%)</p>

      <button className="restart-button" onClick={onRestart}>
        Rejouer
      </button>

      <style>{`
        .result-container {
          max-width: 600px;
          margin: 2rem auto;
          padding: 2rem;
          background: white;
          border-radius: 12px;
          box-shadow: 0px 4px 12px rgba(0,0,0,0.1);
          text-align: center;
          font-family: "Poppins", sans-serif;
        }

        h2 {
          margin-bottom: 1rem;
          color: #111827;
        }

        p {
          font-size: 1.1rem;
          margin-bottom: 2rem;
        }

        .restart-button {
          background: linear-gradient(to right, #10b981, #3b82f6);
          color: white;
          font-size: 1rem;
          font-weight: 600;
          padding: 12px 20px;
          border: none;
          border-radius: 10px;
          cursor: pointer;
          transition: transform 0.2s ease, opacity 0.3s ease;
        }

        .restart-button:hover {
          transform: translateY(-2px);
          opacity: 0.9;
        }
      `}</style>
    </div>
  );
};

export default Result;
