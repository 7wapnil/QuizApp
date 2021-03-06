import React, { useEffect, useState } from 'react';
import QuizHeader from './QuizHeader';
import Question from './Question';
import Results from './Results';
import axios from 'axios';
import { API_BASE_URL, API_HEADERS } from '../lib/constants';
import QuizProgress from './QuizProgress';

const ShowQuiz = (props) => {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [quizData, setQuizData] = useState('');
  const quiz_id = props.match.params.id;

  useEffect(() => {
    const questionURL = `${API_BASE_URL}/api/quiz-questions/all/${quiz_id}`;
    const getQuestion = async () => {
      const { data } = await axios(questionURL, {
        headers: API_HEADERS
      });
      setQuizData(data);
    };
    getQuestion();
  }, [quiz_id]);

  return (
    <div>
      <QuizHeader title={quizData.name} />
      {
        quizData && (
          (quizData.questions.length > questionIndex) ? (
            <div>
              <QuizProgress
                quiz_count={quizData.questions.length}
                current_question={questionIndex}
              />
              <div className="question-container">
                <Question
                  {...quizData.questions[questionIndex]}
                  setQuestionIndex={() => setQuestionIndex(questionIndex + 1)}
                />
              </div>
            </div>
          ) : (
              <div className="question-container">
                <Results
                  questions={quizData.questions}
                  quiz_id={quiz_id}
                />
              </div>
            )
        )
      }
    </div>
  );
};

export default ShowQuiz;