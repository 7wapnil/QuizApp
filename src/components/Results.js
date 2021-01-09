import React from 'react';
import Result from './Result';

const Results = () => {
  return (
    <div>
      <h1 className="score">Your score is: 2</h1>
      <h2>Answers</h2>
      <Result />
      <Result />
      <Result />
    </div>
  );
};

export default Results;