import React from "react";


export default class Help extends React.Component {
  constructor() {
    super();
    this.state = {
      faqMain: true,
    }
  }

  toggleFaqMain() {
    const faqMain = !this.state.faqMain;
    this.setState({faqMain});
  }

  setFaqMainTrue() {
    const faqMain = true;
    this.setState({faqMain});
  }

  render() {
    console.log("help page");

    const { faqMain, details } = this.state;
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

    const faqMainClass = faqMain ? "shown" : "hidden";
    const faqDetailsClass = faqMain ? "hidden" : "shown container";

    return (
      <section class="help">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <img src="./media/images/help.jpg" alt="help" style={imgHelpStyle}/>
              <ul class="nav nav-tabs" style={tabHelpStyle}>
                <li class="active col-md-3"><a href="#faq" style={linkHelpStyle} data-toggle="tab" onClick={this.setFaqMainTrue.bind(this)}>Frequently asked questions</a></li>
                <li class="col-md-3"><a href="#contact" style={linkHelpStyle} data-toggle="tab">Contact an Official</a></li>
                <li class="col-md-3"><a href="#calendar" style={linkHelpStyle} data-toggle="tab">Calendar</a></li>
                <li class="col-md-3"><a href="#legal" style={linkHelpStyle} data-toggle="tab">Legal Vocabulary</a></li>
              </ul>

              <div id="myTabContent" class="tab-content">
                <div class="tab-pane fade active in" id="faq">
                  <div className={faqMainClass}>
                    <div class="row">
                      <div class="col-md-6">
                        <div class="panel panel-default help-box">
                            <div class="panel-body" onClick={this.toggleFaqMain.bind(this)}>
                              <p>Information on Courts</p>
                            </div>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="panel panel-default help-box">
                            <div class="panel-body" onClick={this.toggleFaqMain.bind(this)}>
                              <p>Information on Forms</p>
                            </div>
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-md-6">
                        <div class="panel panel-default help-box">
                            <div class="panel-body" onClick={this.toggleFaqMain.bind(this)}>
                              <p>Information on Judges</p>
                            </div>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="panel panel-default help-box">
                            <div class="panel-body" onClick={this.toggleFaqMain.bind(this)}>
                              <p>Legal Aid</p>
                            </div>
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-md-6">
                        <div class="panel panel-default help-box">
                            <div class="panel-body" onClick={this.toggleFaqMain.bind(this)}>
                              <p>Filing a Case</p>
                            </div>
                        </div>
                      </div>
                      <div class="col-md-6" onClick={this.toggleFaqMain.bind(this)}>
                        <div class="panel panel-default help-box">
                            <div class="panel-body" onClick={this.toggleFaqMain.bind(this)}>
                              <p>Questions about the Act</p>
                            </div>
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-md-6">
                        <div class="panel panel-default help-box">
                            <div class="panel-body" onClick={this.toggleFaqMain.bind(this)}>
                              <p>Filing a Case</p>
                            </div>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="panel panel-default help-box">
                            <div class="panel-body" onClick={this.toggleFaqMain.bind(this)}>
                              <p>Filing a Case</p>
                            </div>
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-md-6">
                        <div class="panel panel-default help-box">
                            <div class="panel-body" onClick={this.toggleFaqMain.bind(this)}>
                              <p>Filing a Case</p>
                            </div>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="panel panel-default help-box">
                            <div class="panel-body" onClick={this.toggleFaqMain.bind(this)}>
                              <p>Filing a Case</p>
                            </div>
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-md-6">
                        <div class="panel panel-default help-box">
                            <div class="panel-body" onClick={this.toggleFaqMain.bind(this)}>
                              <p>Filing a Case</p>
                            </div>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="panel panel-default help-box">
                            <div class="panel-body" onClick={this.toggleFaqMain.bind(this)}>
                              <p>Filing a Case</p>
                            </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={faqDetailsClass}>
                    <div class="row">
                      <div class="col-md-11">
                        <a class="backFaq" onClick={this.toggleFaqMain.bind(this)}>BACK</a>
                      </div>
                    </div>
                    <div class="content-question">
                      <div class="row">
                        <div class="col-md-10 question">
                          <p><strong>What is the qualification of the judges who will be hearing my complaint?</strong></p>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-md-10 answer">
                          <p>
                            The Act stipulates the qualifications of judges for the National Commission under Section 20(1) as: <br/>
                            <ul>
                              <li>a person who is or has been a Judge of the Supreme Court, to be appointed by the Central Government, who shall be its President; provided that no appointment under this clause shall be made except after consultation with the Chief Justice of India;
                              </li>
                              <li>
                              not less than four, and not more than such number of members, as may be prescribed, and one of whom shall be a woman, who shall have the following qualifications, namely:—
                                <ul>
                                  <li>be not less than thirty-five years of age;
                                  </li>
                                  <li>
                                    possess a bachelors degree from a recognised university; and
                                  </li>
                                  <li>
                                    be persons of ability, integrity and standing and have adequate knowledge and experience of at problems relating to economics, law, commerce, accountancy, industry, public affairs or administration:
                                  </li>
                                </ul>
                              </li>
                            </ul>
                            Provided that not more than fifty per cent. of the members shall be from amongst the persons having a judicial background.
                            <br/>
                            The Section further elaborates on expression persons having judicial background'' and cases when a person shall be disqualified for appointment as well as their appointment. Click here to read the entire section.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div class="content-question">
                      <div class="row">
                        <div class="col-md-10 question">
                          <p><strong>Can I file the case on my own or do I need to engage a lawyer? Additionally can I file it on behalf of someone else?</strong></p>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-md-10 answer">
                          <p>
                            You can file a complaint under this Act on your own without hiring any legal professional. The Act aims to bring about a speedy and cost-effective mechanism for redressal of disputes and to fulfill this, it provides for a simple procedure that even someone who is not from a legal background can understand.
                            <br/>
                            Moreover, you can file it on behalf of another person for instance as a beneficiary of those goods/services, as a legal heir/representative of the deceased, relatives of the consumer or on behalf of others if there are numerous consumers having the same interest.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div class="content-question">
                      <div class="row">
                        <div class="col-md-10 question">
                          <p><strong>Do I need to pay a fee for filing the complaint? If yes in what manner and what is the amount?</strong></p>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-md-10 answer">
                          <p>
                            Under the original Act, there was no need to pay any court-fee, However, post the amendment of 2002, there is a fee of Rs. 5000 to be paid for filing a complaint in the National Commission in the form of a Demand Draft in favour of  “The Registrar, NCDRC, New Delhi”.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div class="content-question">
                      <div class="row">
                        <div class="col-md-10 question">
                          <p><strong>Are other courts excluded from hearing consumer disputes?</strong></p>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-md-10 answer">
                          <p>
                            No. The Consumer Protection Act was enacted so as to reduce the burden on ordinary courts, by creating a three-tier remedial structure that can concentrate on addressing only consumer grievances in a speedy, effective and inexpensive manner. It does not preclude the jurisdiction of ordinary courts to take up matters of consumer disputes.
                          </p>
                        </div>
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
