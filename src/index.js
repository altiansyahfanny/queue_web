import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from './layouts/App';
import Auth from './layouts/Auth';

import './assets/styles/tailwind.css';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path="/">
        <App />
      </Route>
      <Route path="/auth">
        <Auth />
      </Route>
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);
