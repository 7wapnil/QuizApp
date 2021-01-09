import React from 'react';

const Option = ({option, addResponse}) => (
  <div>
    <input
      type="radio"
      name="option"
      value={option}
      onChange={() => addResponse(option)}
    />
    <label>{option}</label>
  </div>
);

export default Option;