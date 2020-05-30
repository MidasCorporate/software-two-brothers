import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

// import SingnIn from '../pages//';
// import SignUp from '../pages/Singup';

import DashboardClient from '../pages/client/Dashboard';
// import Profile from '../pages/Profile';

export default function Routes() {
  return (
    <Switch>
      {/* <Route path="/" exact component={SingnIn} />
      <Route path="/register" exact component={SignUp} /> */}

      <Route path="/" exact component={DashboardClient} />
      {/* <Route path="/profile" exact component={Profile} isPrivate /> */}
    </Switch>
  );
}
