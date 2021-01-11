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
      <h1>Welcome to CodeJudge</h1>
      { quizzes.map((quiz) => <Quiz key={quiz.id} {...quiz} />) }
    </div>
  );
};

export default Quizzes;