import React from "react";

import ContactHelp from "../components/ContactHelp";
import FAQHelp from "../components/FAQHelp";
import LegalHelp from "../components/LegalHelp";

export default class Help extends React.Component {

  constructor() {
    super();
    this.state = {
      faqMain: true,
    }
  }

  setFaqMainTrue() {
    const faqMain = true;
    this.setState({faqMain});
  }
  render() {
    const imgHelpStyle = {
      width: "100%",
      height: "150px",
    }

    const tabHelpStyle = {

    }

    const linkHelpStyle = {
      color: "black",
    }

    return (
      <section class="help">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <h2><strong>Help Center</strong></h2>
            </div>
          </div>
          <br/>
          <div class="row">
            <div class="col-md-12">
              <ul class="nav nav-tabs" style={tabHelpStyle}>
                <li class="active col-md-3"><a href="#faq" style={linkHelpStyle} data-toggle="tab">Frequently Asked Questions</a></li>
                <li class="col-md-3"><a href="#legal" style={linkHelpStyle} data-toggle="tab">Legal Dictionary</a></li>
                <li class="col-md-3"><a href="#calendar" style={linkHelpStyle} data-toggle="tab">Calendar</a></li>
                <li class="col-md-3"><a href="#contact" style={linkHelpStyle} data-toggle="tab">Contact Us</a></li>
              </ul>

              <div id="myTabContent" class="tab-content">
                <div class="tab-pane fade active in" id="faq">
                  <FAQHelp/>
                </div>
                <div class="tab-pane fade" id="contact">
                  <ContactHelp/>
                </div>
                <div class="tab-pane fade" id="calendar">
                  <p>This is the Calendar Page</p>
                </div>
                <div class="tab-pane fade" id="legal">
                  <LegalHelp/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
