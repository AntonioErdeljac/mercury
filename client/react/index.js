import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Switch, Route } from 'react-router';
import { createBrowserHistory } from 'history';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import { Authentication, Root, Home, Navigation, Events } from './components';
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
                <Route exact path={paths.client.REGISTER} component={Authentication.Register} />

                <Navigation>
                  <Switch>
                    <Route exact path={paths.client.BASE} component={Home} />
                    <Route exact path={paths.client.EVENTS} component={Events.List} />
                  </Switch>
                </Navigation>
              </Switch>
            </Root>
          )}
        />
      </Router>
    </Provider>,
    document.getElementById('root'),
  );
};
