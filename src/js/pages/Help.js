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
      marginTop: "-42px",
    }

    const linkHelpStyle = {
      color: "black",
    }

    return (
      <section class="help">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <img src="./media/images/help.jpg" alt="help" style={imgHelpStyle}/>
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
                  <p>Food truck fixie locavore, accusamus mcsweeneys marfa nulla single-origin coffee squid. Exercitation +1 labore velit, blog sartorial PBR leggings next level wes anderson artisan four loko farm-to-table craft beer twee. Qui photo booth letterpress, commodo enim craft beer mlkshk aliquip jean shorts ullamco ad vinyl cillum PBR. Homo nostrud organic, assumenda labore aesthetic magna delectus mollit.</p>
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
