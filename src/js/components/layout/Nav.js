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
      borderTop: "0px",
      marginLeft: "68px",
    }
    const navContainerStyle = {
      fontSize: "14px",
    }
    const homeButtonImgStyle = {
      width: "25px",
      marginTop: "-8px",
    }
    const searchNavbar = {
      height: "27px",
      paddingBottom: "9px",
      marginTop: "7px",
    }

    const searchNavStyle = {
      marginRight: "-51px",
    }
    const helpClass = location.pathname.match(/^\/help/) ? "active" : "";


    return (
      <nav class="navbar navbar-inverse" role="navigation">
            <div class="container" style={navContainerStyle}>
              <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul class="nav navbar-nav">
                  <li>
                    <Link to="#" onClick={this.toggleCollapse.bind(this)}>Home</Link>
                  </li>
                  <li>
                    <Link to="tribunal" onClick={this.toggleCollapse.bind(this)}>About Us</Link>
                  </li>
                  <li>
                    <Link to="act" onClick={this.toggleCollapse.bind(this)}>Related Acts</Link>
                  </li>
                  <li>
                    <Link to="case" onClick={this.toggleCollapse.bind(this)}>Case Information</Link>
                  </li>
                  <li>
                    <Link to="publications" onClick={this.toggleCollapse.bind(this)}>Publications</Link>
                  </li>
                  <li class={helpClass}>
                    <Link to="help" onClick={this.toggleCollapse.bind(this)}>Help Center</Link>
                  </li>
                </ul>
                <form class="navbar-form navbar-right" style={searchNavStyle} role="search">
                  <div class="form-group">
                    <input type="text" class="form-control" style={searchNavbar} placeholder="Search"/>
                  </div>
                </form>
              </div>

            </div>

        </nav>
    );
  }
}
