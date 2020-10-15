import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import * as Pages from './pages/Pages';
import { ThemeProvider } from '@material-ui/core';
import DefaultTheme from './Theme';

function App() {
  return (
    <ThemeProvider theme={DefaultTheme}>
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route exact path='/' component={Pages.Home} />
          </Switch>
        </BrowserRouter>
      </div>
    </ThemeProvider>
  );
}

export default App;
