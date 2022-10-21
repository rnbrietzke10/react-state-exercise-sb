import React, { useState } from 'react';
import './EightBall.css';

const EightBall = ({ answers }) => {
  const genRandomIdx = Math.floor(Math.random() * answers.length);
  const eightBallColor = answers[genRandomIdx].color;
  const [text, setText] = useState('Think of a Question');
  const [bgColor, setBgColor] = useState('black');
  const handleClick = () => {
    setText(answers[genRandomIdx].msg);
    setBgColor(eightBallColor);
  };
  const reset = () => {
    setText('Think of a Question');
    setBgColor('black');
  };

  return (
    <>
      <div
        className='EightBall'
        style={{ backgroundColor: bgColor }}
        onClick={handleClick}
      >
        <h2 className='EightBall-text' onClick={handleClick}>
          {text}
        </h2>
      </div>
      <button onClick={reset} className='EightBall-reset-btn'>
        Reset
      </button>
    </>
  );
};

export default EightBall;
