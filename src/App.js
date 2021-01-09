import React from 'react';
import AppRouter from './routers/AppRouter';
import { createStore } from 'redux';
import rootReducer from './reducers/rootReducer';
import { Provider } from 'react-redux';

const store = createStore(rootReducer);

console.log(store.getState());
store.subscribe(() => console.log(store.getState()));

function App() {
  return (
    <Provider store={store}>
      <AppRouter />
    </Provider>
  );
}

export default App;
