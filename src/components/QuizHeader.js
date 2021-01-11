import React from 'react';

const QuizHeader = ({ title }) => {
  return (
    <div className="ui inverted block center aligned header">
      <h1>{title}</h1>
    </div>
  );
};

export default QuizHeader;