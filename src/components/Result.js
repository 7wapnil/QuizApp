import React from 'react';

const Result = ({ques_id, correct_option, submitted_option, getQuestionName}) => {
  return (
    <div className="ui segment">
      <div className={`question-${ques_id}`}>Question: {getQuestionName(ques_id)}</div>
      <div className={`submitted-answer-${ques_id}`}>Your Answer: {submitted_option}</div>
      <div className={`correct-answer-${ques_id}`}>Correct Answer: {correct_option}</div>
    </div>
  );
};

export default Result;