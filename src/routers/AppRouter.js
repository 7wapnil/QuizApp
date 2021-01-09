import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Quizzes from '../components/Quizzes';
import ShowQuiz from '../components/ShowQuiz';

const AppRouter = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Quizzes} />
      <Route path="/quiz/:id" component={ShowQuiz} />
    </Switch>
  </Router>
);

export default AppRouter;