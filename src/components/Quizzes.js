import React, { useEffect, useState } from 'react';
import Quiz from './Quiz';
import axios from 'axios';
import { API_BASE_URL, API_HEADERS } from '../lib/constants';

const Quizzes = () => {
  const [quizzes, setQuizzes] = useState([]);

  useEffect(() => {
    const getQuizList = async () => {
      const { data } = await axios.get(`${API_BASE_URL}/api/quiz/all`, {
        headers: API_HEADERS
      });
      setQuizzes(data);
    };
    getQuizList();
  }, []);

  return (
    <div>
      <div className="ui center aligned header custom-quizzes-header">
        <h1>Welcome to CodeJudge</h1>
      </div>
      <div className="quizzes-container">
        <div className="ui divided items">
          {quizzes.map((quiz) => <Quiz key={quiz.id} {...quiz} />)}
        </div>
      </div>
    </div>
  );
};

export default Quizzes;