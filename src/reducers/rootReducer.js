const defaultRootState = [];

export default (state = defaultRootState, action) => {
  switch(action.type) {
    case 'ADD_RESPONSE':
      return [
        ...state.filter((response) => response.ques_id !== action.response.ques_id),
        action.response
      ];
    default:
      return state;
  }
};