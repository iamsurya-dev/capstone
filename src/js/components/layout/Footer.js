import React from "react";


export default class Footer extends React.Component {
  render() {
    const footerStyle = {
      marginTop: "25px",
      backgroundColor: "#d5d5d5",
      textAlign: "center",
    }

    const footerConstStyle = {
      marginTop: "5px",
    }
    return (
      <footer class="footer" style={footerStyle}>
        <div class="row">
          <div class="col-lg-12" style={footerConstStyle}>
            <p><strong>Content Managed by: National Consumer Disputes Redressal Commission</strong></p>
          </div>
        </div>
      </footer>
    );
  }
}
