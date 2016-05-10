import React from "react";


export default class Footer extends React.Component {
  render() {
    const footerStyle = {
      marginTop: "25px",
      backgroundColor: "#d5d5d5",
    }

    const footerConstStyle = {
      marginTop: "10px",
      fontSize: "13px",
    }

    const footerItemStyle = {
      textAlign: "center",
      marginRight: "25px",
      fontSize: "13px",
    }
    const iconStyle = {
      height: "25px"
    }
    const relatedLinksStyle = {
      fontSize: "12px",
    }
    const relatedLinks = {
      textDecoration: "underline",
      padding: "0px",
    }
    const footerColStyle1 = {
      paddingLeft: "16px",
    }
    const footerColStyle2 = {
      marginTop: "-23px",
      padding: "0px",
    }
    const copyrightStyle = {
      textAlign: "center",
      fontSize: "11px",
    }
    return (
      <footer class="footer site-footer" style={footerStyle}>
        <div class="container">
          <div class="row">
            <div class="col-md-12" style={footerConstStyle}>
              <p><strong>Useful Links:</strong></p>
            </div>
          </div>
          <div class="row">
            <div class="" style={footerColStyle1}>
              <ul class="nav navbar-nav">
                <li style={footerItemStyle}>
                  <img src="./media/images/Contact Us.png" style={iconStyle}/>
                  <br/>
                  <span>Contact Us</span>
                </li>
                <li style={footerItemStyle}>
                  <img src="./media/images/FAQs.png" style={iconStyle}/>
                  <br/>
                  <span>FAQs</span>
                </li>
                <li style={footerItemStyle}>
                  <img src="./media/images/Legal Vocab.png" style={iconStyle}/>
                  <br/>
                  <span>Legal Dictionary</span>
                </li>
                <li style={footerItemStyle}>
                  <img src="./media/images/Careers.png" style={iconStyle}/>
                  <br/>
                  <span>Careers</span>
                </li>
                <li style={footerItemStyle}>
                  <img src="./media/images/Accessibility.png" style={iconStyle}/>
                  <br/>
                  <span>Accessibilty</span>
                </li>
                <li style={footerItemStyle}>
                  <img src="./media/images/Privacy Policy.png" style={iconStyle}/>
                  <br/>
                  <span>Privacy Policy</span>
                </li>
                <li style={footerItemStyle}>
                  <img src="./media/images/Viewing Options.png" style={iconStyle}/>
                  <br/>
                  <span>Viewing Options</span>
                </li>
                <li style={footerItemStyle}>
                  <img src="./media/images/Disclaimer.png" style={iconStyle}/>
                  <br/>
                  <span>Disclaimer</span>
                </li>
              </ul>
            </div>
            <div class="navbar-right" style={footerColStyle2}>
              <div class="row" style={relatedLinksStyle}>
                <p><strong>Related Links:</strong></p>
                <div class="col-md-6" style={relatedLinks}>
                  <span>Aeraat</span><br/>
                  <span>Confonet</span><br/>
                  <span>Department of Consumer Affairs</span>
                </div>
                <div class="col-md-6" style={relatedLinks}>
                  <span>Judis</span><br/>
                  <span>Indian Courts Causlist</span><br/>
                  <span>Supreme Court of India</span>
                </div>
              </div>
            </div>
          </div>
          <br/>
          <div class="row">
            <div class="col-md-12" style={copyrightStyle}>
              <p>Design Prototype by The Justice League, Copyright 2016</p>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}
