import * as React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { browserHistory, Route, Router } from 'react-router';
import { createStore } from 'redux';
import { reducers } from './reducers/combiner';

import { Home } from './components/Home';

const store = createStore(reducers);

const router = (
    <Provider store={store}>
      <Router history={browserHistory}>
        <Route path='/' component={Home}/>
      </Router>
    </Provider>
  );

render(
  router,
  document.getElementById('root'),
);
