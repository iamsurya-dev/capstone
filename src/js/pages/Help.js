import React from "react";

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
              <h3>Help Center</h3>
              <p>
                This page will give you all the relevant information you need for blah
              </p>
            </div>
          </div>
          <br/>
          <div class="row">
            <div class="col-md-12">
              <ul class="nav nav-tabs" style={tabHelpStyle}>
                <li class="active col-md-3"><a href="#faq" style={linkHelpStyle} data-toggle="tab">Frequently asked questions</a></li>
                <li class="col-md-3"><a href="#legal" style={linkHelpStyle} data-toggle="tab">Legal Vocabulary</a></li>
                <li class="col-md-3"><a href="#calendar" style={linkHelpStyle} data-toggle="tab">Calendar</a></li>
                <li class="col-md-3"><a href="#contact" style={linkHelpStyle} data-toggle="tab">Contact an Official</a></li>
              </ul>

              <div id="myTabContent" class="tab-content">
                <div class="tab-pane fade active in" id="faq">
                  <FAQHelp/>
                </div>
                <div class="tab-pane fade" id="contact">
                  <div class="contact container">
                    <div class="row">
                      <div class="col-md-12">
                        <p>We highly encourage active communication with citizens. You can connect with us using the channels listed below.</p>
                      </div>
                    </div>
                    <div class="row contact-tile">
                      <div class="col-md-6 contact-indv-tile">
                        <div class="row">
                          <div class="col-md-12 contact-main-col">
                            <div class="col-md-2 contact-image-col">
                              <img src="./media/images/call.png" class="contact-image" alt="Contact"/>
                            </div>
                            <div class="col-md-10 contact-description">
                              <p>
                                Have a question?
                                <br/>
                                Call us now! 1800-SOLUTION
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-md-6 contact-indv-tile">
                        <div class="row">
                          <div class="col-md-12 contact-main-col">
                            <div class="col-md-2 contact-image-col">
                              <img src="./media/images/email.png" class="contact-image" alt="Contact"/>
                            </div>
                            <div class="col-md-10 contact-description">
                              <p>
                                Email us! Send us your queries on -
                                <br/>
                                askus@ncdrc.gov.in
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <br/>
                    <div class="row">
                      <div class="col-md-10">
                        <p>You can also visit the forum office in-person. We have highly qualified and motivated staff on-site to help and advise you.</p>
                      </div>
                    </div>
                    <div class="row contact-tile">
                      <div class="col-md-6 contact-indv-tile">
                        <div class="row">
                          <div class="col-md-10 contact-main-col">
                            <div class="col-md-2 contact-image-col">
                              <img src="./media/images/address.png" class="contact-image" alt="Contact"/>
                            </div>
                            <div class="col-md-8 contact-description">
                              <p>
                                Upbhokta Nyay Bhavan F-Block GPO Complex,<br/>
                                INA New Delhi 110023
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-md-6 contact-indv-tile">
                        <div class="row">
                          <div class="col-md-10 contact-main-col">
                            <div class="col-md-2 contact-image-col">
                              <img src="./media/images/call-center.png" class="contact-image" alt="Contact"/>
                            </div>
                            <div class="col-md-8 contact-description">
                              <p>
                                Contact an Official at the Tribunal by <br/>booking an appointment
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="tab-pane fade" id="calendar">
                  <p>Etsy mixtape wayfarers, ethical wes anderson tofu before they sold out mcsweeneys organic lomo retro fanny pack lo-fi farm-to-table readymade. Messenger bag gentrify pitchfork tattooed craft beer, iphone skateboard locavore carles etsy salvia banksy hoodie helvetica. DIY synth PBR banksy irony. Leggings gentrify squid 8-bit cred pitchfork.</p>
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
