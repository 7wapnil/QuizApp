import React from 'react';
import { Link } from 'react-router-dom';

const Quiz = ({ id, name, description }) => {
  return (
    <div className="item">
      <div className="content">
        <h3 className={`quiz-list-${id} header`}>
          {name}
        </h3>
        <div className="description">
          <p>{description}</p>
        </div>
      </div>
      <div className="extra">
        <div className="ui right floated">
          <Link to={`/quiz/${id}`}>
            <button className={`start-quiz-${id} ui positive button`}>
              Start
              <i className="right chevron icon"></i>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Quiz;