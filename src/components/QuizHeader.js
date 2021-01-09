import React from 'react';

const QuizHeader = ({ title }) => {
  return (
    <div>
      <h1>{title}</h1>
      <p>--------Progress bar-------------</p>
      <div className="time-bar"><p>Time Remainning: 0:07/0:015 Seconds</p></div>
    </div>
  );
};

export default QuizHeader;