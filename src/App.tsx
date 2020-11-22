import React from 'react';
import { RandomQuotePage, AllQuotesPage } from './pages';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Nav from './components/nav/Nav';

function App() {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route exact path='/'>
          <RandomQuotePage />
        </Route>
        <Route exact path='/allquotes'>
          <AllQuotesPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
