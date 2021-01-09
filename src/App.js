import React from 'react';
import AppRouter from './routers/AppRouter';
import { createStore } from 'redux';
import rootReducer from './reducers/rootReducer';
// import { addResponse } from './actions/rootActions';

const store = createStore(rootReducer);

console.log(store.getState());
store.subscribe(() => console.log(store.getState()));
// store.dispatch(addResponse({ques_id: 5, submitted_option: 'Rice'}));
// store.dispatch(addResponse({ques_id: 5, submitted_option: 'Rice'}));

function App() {
  return (
    <AppRouter />
  );
}

export default App;
