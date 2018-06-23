import React,{Component} from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom'
import store from '../store/store';
import {clearError} from '../actions'

/* Page */
import history from './history'
import Home from '../containers/Home'
import Login from '../containers/Login'
import Register from '../containers/Register'
import Dashboard from '../containers/Dashboard'
import Profile from '../containers/Profile/Profile'
import NotFound from '../containers/NotFound'


class Routes extends Component {

  render() {
    return (
      <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/login' component={Login}/>
            <Route path='/register' component={Register} />
            <PrivateRoute path='/dashboard' component={Dashboard}/>
            <PrivateRoute path='/profile' component={Profile}/>
            <Route path='*' component={NotFound} />
      </Switch>
    );
  }
}

//Private router function
const {loggedIn} = store.getState();
const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props =>
        loggedIn === true ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{ pathname: "/login", state: { from: props.location } }}
          />
        )}
    />
  );
};

export default Routes;
