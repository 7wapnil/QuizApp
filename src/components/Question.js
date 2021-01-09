import React from 'react';
import Option from './Option';

const Question = ({ id, name, options }) => {
  return (
    <div>
      <div className="question"><h2>{name}</h2></div>
      {options.split(',').map((option, index) => <Option key={index} option={option} />)}
    </div>
  );
};

export default Question;