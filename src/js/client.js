import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, hashHistory } from "react-router";

import Help from "./pages/Help";
import Layout from "./pages/Layout";
import Main from "./pages/Main";

const app = document.getElementById('app');

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Layout}>
      <IndexRoute component={Main}></IndexRoute>
      <Route path="help" name="help" component={Help}></Route>
    </Route>
  </Router>,
  app);
