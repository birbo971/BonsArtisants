import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Route, Router, Switch } from 'react-router-dom';
import Home from'./pages/Home';
import history from './history';
import CreateProducts from './pages/CreateProducts';
import NotFound from './pages/NotFound';
//import thunk from 'redux-thunk';
//import { createStore, applyMiddleware, compose } from 'redux';

const routing = (
        <Router history={history}>
        <div>
            <Switch>
            <Route exact path="/" component={App} />
            <Route path="/Create" component={CreateProducts} />
            <Route component={NotFound} />
            </Switch>
        </div>
        </Router>
  )
ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
