import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, hashHistory } from "react-router";

import Act from "./pages/Act";
import Case from "./pages/Case";
import CaseType from "./pages/CaseType";
import ConsumerComplaint from "./pages/ConsumerComplaint";
import Contact from "./pages/Contact";
import Help from "./pages/Help";
import Layout from "./pages/Layout";
import Main from "./pages/Main";
import Publications from "./pages/Publications";
import Tribunal from "./pages/Tribunal";

const app = document.getElementById('app');

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Layout}>
      <IndexRoute component={Main}></IndexRoute>
      <Route path="help" name="help" component={Help}></Route>
      <Route path="contact" name="contact" component={Contact}></Route>
      <Route path="case" name="case" component={CaseType}>
        <IndexRoute component={Case}></IndexRoute>
        <Route path="complaint" name="complaint" component={ConsumerComplaint}></Route>
      </Route>
      <Route path="tribunal" name="tribunal" component={Tribunal}></Route>
      <Route path="act" name="act" component={Act}></Route>
      <Route path="publications" name="publications" component={Publications}></Route>
    </Route>
  </Router>,
  app);
