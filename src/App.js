import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import * as Pages from './pages/Pages';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Pages.Home} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
