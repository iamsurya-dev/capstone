import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, hashHistory } from "react-router";

import Act from "./pages/Act";
import Case from "./pages/Case";
import CaseType from "./pages/CaseType";
import Consumer from "./pages/Consumer";
import ConsumerComplaint from "./pages/ConsumerComplaint";
import Contact from "./pages/Contact";
import Dead from "./pages/Dead";
import Help from "./pages/Help";
import Layout from "./pages/Layout";
import Main from "./pages/Main";
import Publications from "./pages/Publications";
import Tribunal from "./pages/Tribunal";

const app = document.getElementById('app');

ReactDOM.render(
  <Router history={hashHistory} onUpdate={() => window.scrollTo(0, 0)}>
    <Route path="/" component={Layout}>
      <IndexRoute component={Main}></IndexRoute>
      <Route path="help" name="help" component={Help}></Route>
      <Route path="consumer" name="consumer" component={Consumer}></Route>
      <Route path="contact" name="contact" component={Contact}></Route>
      <Route path="case" name="case" component={CaseType}>
        <IndexRoute component={Case}></IndexRoute>
        <Route path="complaint" name="complaint" component={ConsumerComplaint}></Route>
      </Route>
      <Route path="dead" name="dead" component={Dead}></Route>
      <Route path="tribunal" name="tribunal" component={Tribunal}></Route>
      <Route path="act" name="act" component={Act}></Route>
      <Route path="publications" name="publications" component={Publications}></Route>
    </Route>
  </Router>,
  app);
