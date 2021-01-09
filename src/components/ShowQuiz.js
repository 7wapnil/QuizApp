import React, { useEffect, useState } from 'react';
import QuizHeader from './QuizHeader';
import Question from './Question';
import Results from './Results';

const ShowQuiz = () => {
  const [questionIndex, setQuestionIndex] = useState(0);

  const quiz_data = {
    "name": "Basic GK Quiz",
    "description": "This quiz will help to polish your unawareness about General Knowledge.",
    "questions": [
      {
        "id": 1,
        "name": "Which crop is sown on the largest area in India?",
        "options": "Rice,Wheat,Sugarcane,Maize",
        "quiz": 1,
        "points": 1
      },
      {
        "id": 2,
        "name": "Corey Anderson who has hit the fastest ODI century in 36 balls is from?",
        "options": "England,Australia,WI,NZ",
        "quiz": 1,
        "points": 1
      },
      {
        "id": 3,
        "name": "The world smallest country is?",
        "options": "Italy,Canada,Vatican City,Russia",
        "quiz": 1,
        "points": 1
      },
      {
        "id": 4,
        "name": "Novak Djokovic is a famous player associated with the game of?",
        "options": "Hockey,Football,Chess,Lawn Tennis",
        "quiz": 1,
        "points": 1
      },
      {
        "id": 5,
        "name": "Which country below is not one of the members of the UN security council?",
        "options": "Germany,China,Russia,France",
        "quiz": 1,
        "points": 1
      }
    ]
  }

  return (
    <div>
      <QuizHeader title={quiz_data.name} />
      {
        (quiz_data.questions.length > questionIndex) ? (
          <Question
            {...quiz_data.questions[questionIndex]}
            setQuestionIndex={() => setQuestionIndex(questionIndex + 1)}
          />
        ) : <Results />
      }
    </div>
  );
};

export default ShowQuiz;