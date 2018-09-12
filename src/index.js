import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import store from './store';
import registerServiceWorker from './registerServiceWorker';

import 'semantic-ui-css/semantic.min.css';
import './index.css';

import PageHeader from './components/PageHeader';
import HomePage from './pages/HomePage';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import PreferencesPage from './pages/PreferencesPage';
import DashboardPage from './pages/DashboardPage';

const NotFoundPage = ({location}) => (
  <div style={{ textAlign: 'center', margin: 'auto' }}>
    <h1>404</h1>
    <p>Path {location.pathname} not found</p>
    <div>
      <img src="https://media.giphy.com/media/ivH4UhEAPXNAI/giphy.gif" alt="" />
    </div>
  </div>
);

render(
  <Provider store={store}>
    <Router>
      <div>
        <PageHeader />

        <Switch>
          <Route path="/" component={HomePage} exact />
          <Route path="/login" component={LoginPage} />
          <Route path="/register" component={RegisterPage} />
          <Route path="/dashboard" component={DashboardPage} />
          <Route path="/preferences" component={PreferencesPage} />
          <Route component={NotFoundPage} />
        </Switch>
      </div>
    </Router>
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
