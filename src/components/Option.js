import React from 'react';

const Option = ({ option, addResponse, id }) => (
  <div
    onClick={() => addResponse(option)}
    className={`option-field answer-value-${id}`}
  >
    <div className="ui segment">
      <div className="ui radio checkbox">
        <input
          type="radio"
          name="option"
          className="radio-option hidden"
          value={option}
        />
        <label>{option}</label>
      </div>
    </div>
  </div>
);

export default Option;