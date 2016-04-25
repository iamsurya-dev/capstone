import React from "react";

export default class Help extends React.Component {
  render() {
    console.log("help page");
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
                <li class="col-md-3"><a href="#contact" style={linkHelpStyle} data-toggle="tab">Contact an Official</a></li>
                <li class="col-md-3"><a href="#calendar" style={linkHelpStyle} data-toggle="tab">Calendar</a></li>
                <li class="col-md-3"><a href="#legal" style={linkHelpStyle} data-toggle="tab">Legal Vocabulary</a></li>
              </ul>
              <div id="myTabContent" class="tab-content">
              <div class="tab-pane fade active in" id="faq">
                <div class="row">
                  <div class="col-md-6">
                    <div class="panel panel-default help-box">
                      <a href="#">
                        <div class="panel-body">
                          <p>Information on Courts</p>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="panel panel-default help-box">
                      <a href="#">
                        <div class="panel-body">
                          <p>Information on Forms</p>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-6">
                    <div class="panel panel-default help-box">
                      <a href="#">
                        <div class="panel-body">
                          <p>Information on Judges</p>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="panel panel-default help-box">
                      <a href="#">
                        <div class="panel-body">
                          <p>Legal Aid</p>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-6">
                    <div class="panel panel-default help-box">
                      <a href="#">
                        <div class="panel-body">
                          <p>Filing a Case</p>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="panel panel-default help-box">
                      <a href="#">
                        <div class="panel-body">
                          <p>Questions about the Act</p>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-6">
                    <div class="panel panel-default help-box">
                      <a href="#">
                        <div class="panel-body">
                          <p>Filing a Case</p>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="panel panel-default help-box">
                      <a href="#">
                        <div class="panel-body">
                          <p>Filing a Case</p>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-6">
                    <div class="panel panel-default help-box">
                      <a href="#">
                        <div class="panel-body">
                          <p>Filing a Case</p>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="panel panel-default help-box">
                      <a href="#">
                        <div class="panel-body">
                          <p>Filing a Case</p>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-6">
                    <div class="panel panel-default help-box">
                      <a href="#">
                        <div class="panel-body">
                          <p>Filing a Case</p>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="panel panel-default help-box">
                      <a href="#">
                        <div class="panel-body">
                          <p>Filing a Case</p>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="tab-pane fade" id="contact">
                <p>Food truck fixie locavore, accusamus mcsweeneys marfa nulla single-origin coffee squid. Exercitation +1 labore velit, blog sartorial PBR leggings next level wes anderson artisan four loko farm-to-table craft beer twee. Qui photo booth letterpress, commodo enim craft beer mlkshk aliquip jean shorts ullamco ad vinyl cillum PBR. Homo nostrud organic, assumenda labore aesthetic magna delectus mollit.</p>
              </div>
              <div class="tab-pane fade" id="calendar">
                <p>Etsy mixtape wayfarers, ethical wes anderson tofu before they sold out mcsweeneys organic lomo retro fanny pack lo-fi farm-to-table readymade. Messenger bag gentrify pitchfork tattooed craft beer, iphone skateboard locavore carles etsy salvia banksy hoodie helvetica. DIY synth PBR banksy irony. Leggings gentrify squid 8-bit cred pitchfork.</p>
              </div>
              <div class="tab-pane fade" id="legal">
                <p>Trust fund seitan letterpress, keytar raw denim keffiyeh etsy art party before they sold out master cleanse gluten-free squid scenester freegan cosby sweater. Fanny pack portland seitan DIY, art party locavore wolf cliche high life echo park Austin. Cred vinyl keffiyeh DIY salvia PBR, banh mi before they sold out farm-to-table VHS viral locavore cosby sweater.</p>
              </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
