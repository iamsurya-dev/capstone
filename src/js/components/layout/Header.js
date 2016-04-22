import React from "react";


export default class Header extends React.Component {
  render() {
    const logoStyle = {
      position: "absolute",
      zIndex: "100",
      width: "60px",
      margin: "20px 0px 0px -50px",
    };
    const headerStyle = {
      margin: "3px 0px 2px 28px",
    }
    const pageHeaderStyle = {
      margin: "10px 0 0",
      fontFamily: "'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif",
      border: "none",
    }
    return (
      <header class="page-header" style={pageHeaderStyle} role="header">

        <div class="container">
          <img src="./media/images/logo.jpg" style={logoStyle} alt="Logo"/>
          <h4 style={headerStyle}>National Consumer Disputes  Redressal Commission | Supreme Court of India</h4>
        </div>
      </header>
    );
  }
}
