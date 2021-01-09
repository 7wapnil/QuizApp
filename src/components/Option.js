import React from 'react';

const Option = ({option}) => (
  <div>
    <input
      type="radio"
      name="option"
      value={option}
      onChange={() => console.log('Clicked......')}
    />
    <label>{option}</label>
  </div>
);

export default Option;