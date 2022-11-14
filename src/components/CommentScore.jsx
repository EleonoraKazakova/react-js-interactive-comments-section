import { useState } from "react";
import "../styles/score.sass";

export default function CommentScore({ score }) {
  const [currentScore, setCurrentScore] = useState(score);
  function addScore() {
    setCurrentScore(currentScore + 1);
  }

  function subtractScore() {
    setCurrentScore(currentScore - 1);
  }

  return (
    <>
      <span onClick={addScore} className='score-sign'>+</span>
      <span className="score-number">{currentScore}</span>
      <span onClick={subtractScore} className='score-sign'>-</span>
    </>
  );
}
