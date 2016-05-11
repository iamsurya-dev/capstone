import React from "react";


export default class Header extends React.Component {
  render() {
    const logoStyle = {
      position: "absolute",
      zIndex: "100",
      width: "60px",
      margin: "24px 0px 0px -50px",
    };
    const headerStyle = {
      margin: "3px 0px 2px 28px",
      fontSize: "16px",
    }
    const headerDetailsStyle = {
      marginLeft: "28px",
      fontSize: "12px",
    }
    const pageHeaderStyle = {
      margin: "28px 0 0 0",
      padding: "0px",
      fontFamily: "'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif",
      border: "none",
    }
    const viewOptionsHeaderStyle = {
      fontSize: "12px",
      float: "right",
    }
    return (
      <header class="page-header" style={pageHeaderStyle} role="header">
        <div class="container">
          <img src="./media/images/logo.jpg" style={logoStyle} alt="Logo"/>
          <h4 style={headerStyle}><strong>N</strong>ational <strong>C</strong>onsumer <strong>D</strong>isputes  <strong>R</strong>edressal <strong>C</strong>ommission</h4>
          <span style={headerDetailsStyle}>The NCDRC has been established for dealing with consumer grievances at the national level.</span>
        </div>
      </header>
    );
  }
}
