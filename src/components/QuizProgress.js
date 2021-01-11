import React, { useEffect, useState } from 'react';
import { Progress } from 'semantic-ui-react';

const QuizProgress = ({quiz_count, current_question}) => {
  const [percentage, setPercentage] = useState(0);
  useEffect(() => {
    const current_pecentage = (current_question/quiz_count)*100
    setPercentage(current_pecentage);
  }, [current_question, quiz_count]);

  return (
    <Progress
      percent={percentage}
      indicating
    />
  );
};

export default QuizProgress;