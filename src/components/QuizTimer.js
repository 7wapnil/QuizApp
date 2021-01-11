import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addResponse } from '../actions/rootActions';

const QuizTimer = ({ questionId, setQuestionIndex }) => {
  const [timer, setTimer] = useState(15000);
  const dispatch = useDispatch();

  useEffect(() => {
    const timeoutID = setTimer(15000);

    return () => clearTimeout(timeoutID);
  }, [questionId]);

  useEffect(() => {
    const timeoutID = setTimeout(() => {
      if(timer === 0) {
        dispatch(addResponse({ques_id: questionId}));
        setQuestionIndex();
      } else {
        setTimer(timer - 1000);
      }
    }, 1000);

    return () => clearTimeout(timeoutID);
  });

  const msToMMSS = (ms) => {
    let seconds = ms / 1000;
    const minutes = parseInt(seconds / 60);
    seconds = seconds % 60;

    return `${minutes}:${('0' + seconds).slice(-2)}`;
  }

  return (
    <div className="time-bar">
      Time Remaining: {msToMMSS(timer)}/0:15 seconds
    </div>
  );
};

export default QuizTimer;