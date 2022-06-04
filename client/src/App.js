import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';

import MainNavigation from './Shared/Navigation/MainNavigation';
import SignIn from './User/pages/SignIn';
import Home from './Home/home';
import Profile from './User/pages/profile';
import Student from './Student/pages/student';
import Panel from './PanelMembers/pages/panel';
import Supervisor from './Supervisors/pages/supervisor';

import { Role } from './_helpers/role';
import { PrivateRoute } from './_helpers/private-route';
import { authenticationService } from './services/authentication-service';
import Footer from './Home/footer';
import Dashboard from './Admin/pages/Dashboard';


const App = () => {
  let currentUser = null;
  authenticationService.currentUser.subscribe(user => currentUser = user);
  const routes = currentUser ? (
    <Switch>
      <Route path="/" component={Home} exact />
      <PrivateRoute path="/profile" component={Profile} />
      <PrivateRoute path="/student" component={Student} />
      <PrivateRoute path="/panel" component={Panel} />
      <PrivateRoute path="/supervisor" component={Supervisor} />
      <Route path="/admin">
        <Dashboard />
      </Route>
      <Redirect to="/" />
    </Switch>
  ) : (
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/auth">
        <SignIn />
      </Route>
      <Redirect to="/" />
    </Switch>
  );

  return (
    <Router>
      <MainNavigation />
      <main>{routes}</main>
      <Footer />
    </Router>

  );
};

export default App;