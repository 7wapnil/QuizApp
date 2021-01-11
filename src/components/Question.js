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
      <div className="question-div">
        <div className="question">
          <h2>{name}</h2>
        </div>
        <div className="ui segments">
          <div className="ui form">
            <div className="grouped fields">
              {options.split(',').map((option, index) => (
                <Option
                  id={index+1}
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Question;