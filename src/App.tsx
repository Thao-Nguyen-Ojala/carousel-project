import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Discovery from './pages/Discovery/Discovery';
import './App.scss';

const App: React.FC = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" exact component={Discovery} />
        </Switch>
      </Router>
    </>
  );
};

export default App;
