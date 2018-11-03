import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Switch, Route } from 'react-router';
import { createBrowserHistory } from 'history';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import { Authentication, Root } from './components';
import { middleware, reducers } from './store';

import { paths } from '../../common/constants';

import '../scss/index.scss';

const store = createStore(reducers, applyMiddleware(thunk, middleware()));

window.onload = () => {
  ReactDOM.render(
    <Provider store={store}>
      <Router history={createBrowserHistory()}>
        <Route
          render={() => (
            <Root>
              <Switch>
                <Route exact path={paths.client.LOGIN} component={Authentication.Login} />
              </Switch>
            </Root>
          )}
        />
      </Router>
    </Provider>,
    document.getElementById('root'),
  );
};
