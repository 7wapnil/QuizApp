import React from 'react';

const QuizHeader = ({ title }) => {
  return (
    <div>
      <h1>{title}</h1>
      <p>--------Progress bar-------------</p>
    </div>
  );
};

export default QuizHeader;