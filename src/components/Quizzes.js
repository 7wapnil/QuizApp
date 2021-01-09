import React from 'react';
import Quiz from './Quiz';

const Quizzes = () => {
  const quizzes =  [
    {
      "id": 1,
      "name": "Basic GK Quiz",
      "description": "This quiz will help to polish your unawareness about General Knowledge."
    },
    {
      "id": 2,
      "name": "Sports Quiz",
      "description": "The Sports Quiz consists of different questions from countries and national games and also Olympic games."
    },
    {
      "id": 3,
      "name": "Indian Geography",
      "description": "Indian Geography Online Test contains various questions that are useful for every candidate to face multiple competitive exams."
    }
  ]

  return (
    <div>
      <h1>Welcome to CodeJudge</h1>
      { quizzes.map((quiz) => <Quiz key={quiz.id} {...quiz} />) }
    </div>
  );
};

export default Quizzes;