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
      fontSize: "16px",
    }
    const homeButtonImgStyle = {
      width: "25px",
      marginTop: "-8px",
    }

    const helpClass = location.pathname.match(/^\/help/) ? "active" : "";


    return (
      <nav class="navbar navbar-inverse" role="navigation">
            <div class="container" style={navContainerStyle}>
              <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul class="nav navbar-nav">
                  <li>
                    <a href="#"><img src="media/images/home-button.png" style={homeButtonImgStyle}/></a>
                  </li>
                  <li>
                    <a href="#">Tribunal</a>
                  </li>
                  <li>
                    <a href="#">Act</a>
                  </li>
                  <li>
                    <a href="#">Complaints</a>
                  </li>
                  <li>
                    <a href="#">Updates</a>
                  </li>
                  <li class={helpClass}>
                    <Link to="help" onClick={this.toggleCollapse.bind(this)}>Help</Link>
                  </li>
                </ul>
                <form class="navbar-form navbar-right" role="search">
                  <div class="form-group">
                    <input type="text" class="form-control" placeholder="Search"/>
                  </div>
                </form>
              </div>

            </div>

        </nav>
    );
  }
}
