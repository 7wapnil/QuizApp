import React from 'react';
import Option from './Option';
import { useDispatch } from 'react-redux';
import { addResponse } from '../actions/rootActions';
import QuizTimer from './QuizTimer';

const Question = ({ id, name, options, setQuestionIndex }) => {
  const dispatch = useDispatch();

  return (
    <div>
      <QuizTimer
        questionId={id}
        setQuestionIndex={() => setQuestionIndex()}
      />
      <div className="question"><h2>{name}</h2></div>
      {options.split(',').map((option, index) => (
        <Option
          key={index}
          option={option}
          addResponse={(submitted_option) => {
            dispatch(addResponse({
              ques_id: id,
              submitted_option
            }));
            setQuestionIndex();
          }}
        />
      ))}
    </div>
  );
};

export default Question;