import React from 'react';
import { render } from 'react-dom';
import 'semantic-ui-css/semantic.min.css';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { Provider } from 'react-redux';
import store from './store';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';


const About = () => (
  <div>
    <h1>about</h1>
  </div>
);

const Dashboard = () => (
  <div>
    <h1>dashboard</h1>
  </div>
);

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
        <Header />

        <Switch>
          <Route path="/" component={HomePage} exact />
          <Route path="/login" component={LoginPage} />
          <Route path="/about" component={About} />
          <Route path="/dashboard" component={Dashboard} />
          <Route component={NotFoundPage} />
        </Switch>
      </div>
    </Router>
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
