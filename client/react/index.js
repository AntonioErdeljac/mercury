import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Switch, Route } from 'react-router';
import { createBrowserHistory } from 'history';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import { Root } from './components';
import { middleware, reducers } from './store';

import 'antd/dist/antd.less';

const store = createStore(reducers, applyMiddleware(thunk, middleware()));

window.onload = () => {
  ReactDOM.render(
    <Provider store={store}>
      <Router history={createBrowserHistory()}>
        <Route
          render={() => (
            <Root />
          )}
        />
      </Router>
    </Provider>,
    document.getElementById('root'),
  );
};
