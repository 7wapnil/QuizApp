import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'semantic-ui-css/semantic.min.css';
import './styles/style.scss';

// BACKEND ENDPOINT BASE URL
console.log(process.env.REACT_APP_API_URL);

ReactDOM.render(<App />, document.getElementById('root'));