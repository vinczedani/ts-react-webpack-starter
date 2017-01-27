import * as React from "react";
import * as ReactDOM from "react-dom";
import { Home } from "./Home";
import { Router, Route, browserHistory } from 'react-router';

const router = (
    <Router history={browserHistory}>
      <Route path="/" component={Home}/>
    </Router>
  )

ReactDOM.render(
  router,
  document.getElementById("root")
);
