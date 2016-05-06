import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, hashHistory } from "react-router";

import Case from "./pages/Case";
import Contact from "./pages/Contact";
import Help from "./pages/Help";
import Layout from "./pages/Layout";
import Main from "./pages/Main";
import Tribunal from "./pages/Tribunal";

const app = document.getElementById('app');

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Layout}>
      <IndexRoute component={Main}></IndexRoute>
      <Route path="help" name="help" component={Help}></Route>
      <Route path="contact" name="contact" component={Contact}></Route>
      <Route path="case" name="case" component={Case}></Route>
      <Route path="tribunal" name="tribunal" component={Tribunal}></Route>
    </Route>
  </Router>,
  app);
