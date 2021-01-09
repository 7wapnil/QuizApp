import React from 'react';

const Option = ({ option, addResponse }) => (
  <div>
    <input
      type="radio"
      name="option"
      checked={false}
      value={option}
      onChange={() => addResponse(option)}
    />
    <label>{option}</label>
  </div>
);

export default Option;