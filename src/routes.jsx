import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { HomePage } from './containers/Home';
import { UserProfile } from './containers/UserProfile';

function Routes() {
  return (    
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={HomePage} />
        <Route path='/user/:address' component={UserProfile} />
        {/* <Route component={Page404}/> */}
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;