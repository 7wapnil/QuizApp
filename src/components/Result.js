import React from 'react';

const Result = ({res_id, ques_id, correct_option, submitted_option, getQuestionName}) => {
  return (
    <div className="ui segment">
      <div className={`question-${res_id}`}>Question: {getQuestionName(ques_id)}</div>
      <div className={`submitted-answer-${res_id}`}>Your Answer: {submitted_option}</div>
      <div className={`correct-answer-${res_id}`}>Correct Answer: {correct_option}</div>
    </div>
  );
};

export default Result;