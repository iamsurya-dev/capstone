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
      fontSize: "18px",
      color: "#ffffff",
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
      marginRight: "-60px",
    }
    const homeClass = location.hash.match(/\/\?/) ? "active home-active" : "";
    const aboutClass = location.hash.match(/\/tribunal/) ? "active about-active" : "";
    const actClass = location.hash.match(/\/act/) ? "active act-active" : "";
    const consumerClass = location.hash.match(/\/consumer/) ? "active consumer-active" : "";
    const caseClass = location.hash.match(/\/case/) ? "active case-active" : "";
    const publicationsClass = location.hash.match(/\/publications/) ? "active publications-active" : "";
    const helpClass = location.hash.match(/\/help/) ? "active help-active" : "";


    return (
      <nav class="navbar navbar-inverse nav-color" role="navigation">
            <div class="container" style={navContainerStyle}>
              <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul class="nav navbar-nav">
                  <li class={homeClass}>
                    <Link to="#" onClick={this.toggleCollapse.bind(this)}>Home<i class="fa"></i></Link>
                  </li>
                  <li class={aboutClass}>
                    <Link to="tribunal" onClick={this.toggleCollapse.bind(this)}>About Us<i class="fa"></i></Link>
                  </li>
                  <li class={actClass}>
                    <Link to="act" onClick={this.toggleCollapse.bind(this)}>Related Acts<i class="fa"></i></Link>
                  </li>
                  <li class={consumerClass}>
                    <Link to="consumer" onClick={this.toggleCollapse.bind(this)}>Consumer Rights<i class="fa"></i></Link>
                  </li>
                  <li class={caseClass}>
                    <Link to="case" onClick={this.toggleCollapse.bind(this)}>Legal Recourse<i class="fa"></i></Link>
                  </li>
                  <li class={publicationsClass}>
                    <Link to="publications" onClick={this.toggleCollapse.bind(this)}>Publications<i class="fa"></i></Link>
                  </li>
                  <li class={helpClass}>
                    <Link to="help" onClick={this.toggleCollapse.bind(this)}>Help Center<i class="fa"></i></Link>

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
