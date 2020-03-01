import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import MainPage from './MainPage.js';
import App from './App';

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={MainPage}/>
      <Route path="/workouts/" component={App} />
    </Switch>
  
  </BrowserRouter>
)

export default Router;