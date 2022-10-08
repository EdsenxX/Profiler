import React from 'react';
import { createStore } from 'redux';
import { Router} from 'react-router-dom';
import { Provider } from 'react-redux';
import { createBrowserHistory } from 'history';
import reducers from '../reducers';

const store = createStore(reducers, {});
const history = createBrowserHistory();

const ProviderMock = props => (
  <Provider store={store}>
    <Router location={history.location} navigator={history}>
      {props.children}
    </Router>
  </Provider>
)

export default ProviderMock;