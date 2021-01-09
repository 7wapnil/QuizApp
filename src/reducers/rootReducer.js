const defaultRootState = [];

export default (state = defaultRootState, action) => {
  switch(action.type) {
    case 'ADD_RESPONSE':
      return [...state, action.response];
    default:
      return state;
  }
};