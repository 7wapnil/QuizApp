import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Result from './Result';
import { useSelector } from 'react-redux';
import { API_BASE_URL, API_HEADERS } from '../lib/constants';

const Results = ({ questions, quiz_id }) => {
  const [results, setResults] = useState('');
  const mappings = useSelector((state) => state.responses);

  useEffect(() => {
    const getResults = async () => {
      const { data } = await axios.post(`${API_BASE_URL}/api/user/quiz-score`, {
        quiz_id,
        mappings
      }, {
        headers: API_HEADERS
      });
      setResults(data);
    };
    getResults();
  }, [quiz_id, mappings]);

  const getQuestionName = (ques_id) => {
    const question = questions.find(({ id }) => id === ques_id);

    return question && question.name
  };

  return (
    <div>
      <div className="ui center aligned header">
        <h1 className="score">Your score is: {results.score}</h1>
      </div>
      <div className="ui segments">
        <h2 className="ui top attached header">Answers</h2>
        {results && results.questions.map((question) => (
          <Result
            {...question}
            key={question.ques_id}
            getQuestionName={getQuestionName}
          />
        ))}
      </div>
    </div>
  );
};

export default Results;