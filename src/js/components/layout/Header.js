import React from "react";


export default class Header extends React.Component {
  render() {
    const logoStyle = {
      position: "absolute",
    };
    const headerStyle = {
      marginLeft: "90px"
    }
    const hrStyle = {
      marginLeft: "90px",
      marginTop: "0px",
      marginBottom: "0px",
      width: "500px"
    }
    const pageHeaderStyle = {
      margin: "22px 0 0",
      fontFamily: "'Raleway', 'Helvetica Neue', Helvetica, Arial, sans-serif",
    }
    return (
      <header class="page-header" style={pageHeaderStyle} role="header">
        <div class="container">
          <img alt="Logo" style={logoStyle} src="./media/images/logo.jpg"/>
          <h4 style={headerStyle}>National Consumer Disputes  Redressal Commission</h4>
          <hr style={hrStyle}/>
          <p style={headerStyle}><strong>Supreme Court of India</strong></p>
        </div>
      </header>
    );
  }
}
