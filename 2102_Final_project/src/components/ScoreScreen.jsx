import React from 'react';
import './ScoreScreen.css';

function ScoreScreen({ score }) {
    return (
      <div className="score-container">
        <h2>Your Score:</h2>
        <p>{score} out of 10</p>
      </div>
    );
  }

export default ScoreScreen;
