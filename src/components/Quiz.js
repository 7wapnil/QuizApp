import React from 'react';
import { Link } from 'react-router-dom';

const Quiz = ({ id, name, description }) => {
  return (
    <div>
      <h3 className={`quiz-list-${id}`}>
        {name}
      </h3>
      <p>{description}</p>
      <Link to={`/quiz/${id}`}>
        <button className={`start-quiz-${id}`}>Start</button>
      </Link>
    </div>
  );
};

export default Quiz;