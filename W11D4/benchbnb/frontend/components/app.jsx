import React from 'react';
import { Route } from 'react-router-dom';
import GreetingContainer from './greeting_container';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import SearchContainer from './bench/search_container';
import { AuthRoute } from '../util/route_util';

const App = () => (
  <div>
    <header>
      <h1>Bench BnB</h1>
      <GreetingContainer />
    </header>
    <AuthRoute path="/login" component={LoginFormContainer} />
    <AuthRoute path="/signup" component={SignupFormContainer} />
    <Route exact path="/" component={SearchContainer} />
  </div>
);

export default App;
