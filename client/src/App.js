import React, { Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Alert from './components/layout/Alert';
// Redux
import { Provider } from 'react-redux';
import store from './store';
import { loadUser } from './actions/auth';
import setAuthToken from './utils/setAuthToken';

import './App.css';

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);
  return (
    // Redux Provider
    <Provider store={store}>
      {/* Displays different pages in our SPA */}
      <Router>
        {/* Fragment lets us return multiple elements */}
        <Fragment>
          {/* The Navbar from components,  This will always display */}
          <Navbar />
          {/* Landing page route */}
          <Route exact path='/' component={Landing} />
          {/* This section puts all of our other pages in a container */}
          <section className='container'>
            {/* Our Alert for errors, client side */}
            <Alert />
            {/* Switch lets us change what page is displayed */}
            <Switch>
              {/* Register page route */}
              <Route exact path='/register' component={Register} />
              {/* Login page route */}
              <Route exact path='/login' component={Login} />
            </Switch>
          </section>
        </Fragment>
      </Router>
    </Provider>
  );
};
export default App;
