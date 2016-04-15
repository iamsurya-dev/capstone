import React from "react";
import { IndexLink, Link } from "react-router";

export default class Nav extends React.Component {
  constructor() {
    super();
    this.state = {
      collapsed: true,
    }
  }

  toggleCollapse() {
    const collapsed = !this.state.collapsed;
    this.setState({collapsed});
  }

  render() {
    const navStyle = {
      borderBottom: "1px solid #dddddd",
      borderTop: "transparent",
    }
    return (
      <nav class="navbar navbar-inverse" style={navStyle} role="navigation">
            <div class="container">

                <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                  <div class="row nav navbar-nav">
                    <div class="col-md-15 col-sm-3">
                      <a href="#">About</a>
                    </div>
                    <div class="col-md-15 col-sm-3">
                      <a href="#">About</a>
                    </div>
                    <div class="col-md-15 col-sm-3">
                      <a href="#">About</a>
                    </div>
                    <div class="col-md-15 col-sm-3">
                      <a href="#">About</a>
                    </div>
                    <div class="col-md-15 col-sm-3">
                      <a href="#">About</a>
                    </div>
                  </div>
                    /*<ul class="nav navbar-nav">
                        <li>
                            <a href="#">About</a>
                        </li>
                        <li>
                            <a href="#">Services</a>
                        </li>
                        <li>
                            <a href="#">Contact</a>
                        </li>
                    </ul>*/
                </div>
            </div>

        </nav>
    );
  }
}
