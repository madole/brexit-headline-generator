
import { Router, Route, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import React from 'react';

import App from './containers/App';
import configure from './store';

const store = configure();
const history = syncHistoryWithStore(browserHistory, store);

const path = (process.NODE_ENV === 'production') ? '/brexit-headline-generator' : '/';

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path={path} component={App} />
    </Router>
  </Provider>,
  document.getElementById('root')
);
