import React from 'react';
import './Result.css';

const Result = ({score, playAgain}) => (
  <div className="score-board">
    <div className="score">
      You got {score} right!
    </div>
    <button 
      className="play-btn"
      onClick={playAgain}
    >
      Play again
    </button>
  </div>
);

export default Result;
