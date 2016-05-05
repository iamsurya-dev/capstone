import React from "react";

import FAQMain from "../components/FAQMain";


export default class Main extends React.Component {
  render() {
    const Faq = [
      "Can I file a case on my own or do I need to engage a lawyer?",
      "Can the complaint be filed in any language?",
      "Are other courts excluded from hearing consumer disputes?",
      "Do I need to pay a fee for filing the complaint?",
      "What is the qualification of the judges who will be hearing my complaint?",
    ].map((question, i) => <FAQMain key={i} question={question}/>);

    const tileRowStyle = {
      height: "193px",
      marginBottom: "10px",
    }
    const tileColStyle = {
      paddingLeft: "5px",
      paddingRight: "5px",
      marginLeft: "-10px",
      marginRight: "10px",
    }
    const quickLinkStyle = {
      border: "1px lightgray solid",
    }
    const quickLinkRowStyle1 = {
      height: "100%",
      background: "lightgray",
      fontSize: "13px",
    }
    const quickLinkRowStyle2 = {
      height: "100%",
      fontSize: "13px",
    }
    const quickLinkColStyle = {
      marginTop: "10px",
    }
    const imageQuickLinkStyle = {
      width: "100%",
    }
    const imageColStyle = {
      padding: "0px",
    }
    const linkStyle = {
      fontSize: "12px",
    }
    const imgTileStyle = {
      width: "100%",
      background: "url('./media/images/pics.png')",
      color: "black",
      margin: "0",
      padding: "0"
    }
    const imgHeadingStyle = {
      height: "135px",
      textAlign: "center",
    }

    const tileDescriptionStyle = {
      background: "black",
      opacity: "0.6",
      padding: "0",
      margin: "0",
      height: "100%",
      color: "white"
    }

    const faqColHeadingStyle = {
      backgroundColor: "#395c82",
      color: "#ffffff",
      borderColor: "lightgray",
      height: "2.5em",
    }

    const faqColStyle = {
      marginTop: "10px",
      marginLeft: "-5px",
      marginRight: "5px"
    }
    const faqSpanHeadingStyle = {
      display: "inline-block",
      marginTop: "8px",
      color: "#ffffff"
    }

    const linksColStyle = {
      margin: "0px",
      padding: "0px",
    }

    const twitterStyle = {
      border: "1px lightgray solid",
      padding: "0px"
    }

    const newsColStyle = {
      border: "1px lightgray solid",
      paddingLeft: "10px",
      fontSize: "13px",
      marginTop: "10px",
    }

    const newsHeaderColStyle = {
      backgroundColor: "#395c82",
      color: "#ffffff",
      borderColor: "lightgray",
      height: "2.5em",
    }

    const newsHeaderStyle = {
      display: "inline-block",
      marginTop: "8px",
      color: "#ffffff"
    }

    const mainRowStyle = {
      display: "table",
    }

    const mainColStyle = {
      float: "none",
      display: "table-cell",
      verticalAlign: "top",
    }

    const maxHeightStyle = {
      maxHeight: "100%",
      overflow: "auto",
    }

    const newsContentStyle = {
      marginTop: "23px",
      marginBottom: "5px",
    }

    const newsReadMoreStyle = {
      textAlign: "right",
    }

    const infoContentStyle = {
      marginTop: "23px",
      marginBottom: "28px",
    }

    const newsParaStyle = {
      margin: "0px",
    }

    const newsImageStyle = {
      position: "absolute",
      width: "32px",
      marginLeft: "-19px",
      marginTop: "-9px"
    }

    const rtiQuestionStyle = {
      display: "inline-block",
      marginTop: "8.24px",
      marginBottom: "8.24px",
      fontSize: "13px",
    }

    const rtiColQuestionStyle = {
      border: "1px lightgray solid",
    }

    const rtiMainColStyle = {
      marginLeft: "51px",
      width: "549px",
      marginTop: "10px",
    }

    const rtiColHeadingStyle = {
      backgroundColor: "#395c82",
      color: "#ffffff",
      borderColor: "lightgray",
      height: "2.5em",
    }

    const rtiColStyle = {
      marginTop: "9px",
      marginLeft: "-5px",
      marginRight: "5px"
    }
    const rtiSpanHeadingStyle = {
      display: "inline-block",
      marginTop: "8px",
      color: "#ffffff"
    }

    return (
      <main>
        <div class="container">
          <div class="row">
            <div class="col-md-8">
              <div class="row" style={tileRowStyle}>
                <div class="col-md-4" style={tileColStyle}>
                    <a href="#" class="col-md-12" style={imgTileStyle}>
                      <div style={imgHeadingStyle}>
                        <br/><br/>
                        <p>Types of Cases</p>
                      </div>
                      <div style={tileDescriptionStyle}>
                        <p>This is the description to a tile in the homepage.</p>
                      </div>
                    </a>
                </div>
                <div class="col-md-4" style={tileColStyle}>
                  <a href="#" class="col-md-12" style={imgTileStyle}>
                    <div style={imgHeadingStyle}>
                      <br/><br/>
                      <p>Case Lifecycle</p>
                    </div>
                    <div style={tileDescriptionStyle}>
                      <p>This is the description to a tile in the homepage.</p>
                    </div>
                  </a>
                </div>
                <div class="col-md-4" style={tileColStyle}>
                  <a href="#" class="col-md-12" style={imgTileStyle}>
                    <div style={imgHeadingStyle}>
                      <br/><br/>
                      <p>Steps to File a Complaint</p>
                    </div>
                    <div style={tileDescriptionStyle}>
                      <p>This is the description to a tile in the homepage.</p>
                    </div>
                  </a>
                </div>
              </div>
              <div class="row" style={tileRowStyle}>
                <div class="col-md-4" style={tileColStyle}>
                    <a href="#" class="col-md-12" style={imgTileStyle}>
                      <div style={imgHeadingStyle}>
                        <br/><br/>
                        <p>Access a Case</p>
                      </div>
                      <div style={tileDescriptionStyle}>
                        <p>This is the description to a tile in the homepage.</p>
                      </div>
                    </a>
                </div>
                <div class="col-md-4" style={tileColStyle}>
                  <a href="#" class="col-md-12" style={imgTileStyle}>
                    <div style={imgHeadingStyle}>
                      <br/><br/>
                      <p>Forms and Templates</p>
                    </div>
                    <div style={tileDescriptionStyle}>
                      <p>This is the description to a tile in the homepage.</p>
                    </div>
                  </a>
                </div>
                <div class="col-md-4" style={tileColStyle}>
                  <a href="#" class="col-md-12" style={imgTileStyle}>
                    <div style={imgHeadingStyle}>
                      <br/><br/>
                      <p>Interact with Data</p>
                    </div>
                    <div style={tileDescriptionStyle}>
                      <p>This is the description to a tile in the homepage.</p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div class="col-md-4" style={quickLinkStyle}>
              <div class="row" style={quickLinkRowStyle1}>
                <div class="col-md-12" style={quickLinkColStyle}>
                  <div class="col-md-2" style={imageColStyle}>
                    <img src="./media/images/call.png" style={imageQuickLinkStyle} alt="Contact"/>
                  </div>
                  <div class="col-md-10">
                    <p>
                      Have a question?
                      <br/>
                      Call us now! 1800-SOLUTION
                      <br/><br/>
                      <div style={linkStyle}>
                        <a href="#">Click here for more options</a>
                      </div>
                    </p>
                  </div>
                </div>
              </div>
              <div class="row" style={quickLinkRowStyle2}>
                <div class="col-md-12" style={quickLinkColStyle}>
                  <div class="col-md-2" style={imageColStyle}>
                    <img src="./media/images/email.png" style={imageQuickLinkStyle} alt="Contact"/>
                  </div>
                  <div class="col-md-10">
                    <p>
                      Email us! Send us your queries on -
                      <br/>
                      askus@ncdrc.gov.in
                      <br/><br/>
                      <div style={linkStyle}>
                        <a href="#">Connect with an official</a>
                      </div>
                    </p>
                  </div>
                </div>
              </div>
              <div class="row" style={quickLinkRowStyle1}>
                <div class="col-md-12" style={quickLinkColStyle}>
                  <div class="col-md-2" style={imageColStyle}>
                    <img src="./media/images/address.png" style={imageQuickLinkStyle} alt="Contact"/>
                  </div>
                  <div class="col-md-10">
                    <p>
                      Upbhokta Nyay Bhavan F-Block GPO Complex,
                      INA New Delhi 110023
                      <br/>
                      <div style={linkStyle}>
                        <a href="#">District Forums</a> | <a href="#">State Commissions</a>
                      </div>
                    </p>
                  </div>
                </div>
              </div>
              <div class="row" style={quickLinkRowStyle2}>
                <div class="col-md-12" style={quickLinkColStyle}>
                  <div class="col-md-2" style={imageColStyle}>
                    <img src="./media/images/calendar.png" style={imageQuickLinkStyle} alt="Contact"/>
                  </div>
                  <div class="col-md-10">
                    <p>
                      Find out Court Hours, Break Timings
                      and Holiday Schedules
                      <br/>
                      <div style={linkStyle}>
                        <a href="#">Court Calendar</a> | <a href="#">Circuit Bench Schedule</a> | <a href="#">Causlists</a>
                      </div>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-6" style={faqColStyle}>
              <div class="row">
                <div class="col-md-12" style={faqColHeadingStyle}>
                  <h4 style={faqSpanHeadingStyle}>Top 5 Frequently Asked Questions</h4>
                </div>
              </div>
              <div class="row">
                {Faq}
              </div>
            </div>
            <div class="col-md-6" style={linksColStyle}>
              <div class="row">
                <div class="col-md-6">
                  <div class="row">
                    <div class="col-md-12" style={maxHeightStyle}>
                      <div class="row">
                        <div class="col-md-2"></div>
                        <div class="col-md-10" style={newsColStyle}>
                          <img src="./media/images/news.png" style={newsImageStyle} alt="latest news"/>
                          <div style={newsContentStyle}>
                            <p style={newsParaStyle}>April 20, 2016, Consumer Protection Bill to address issues of online shoppers.</p>
                            <p style={newsReadMoreStyle}>... Read more</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="row">
                    <div class="col-md-12" style={maxHeightStyle}>
                        <div class="col-md-12" style={newsColStyle}>
                          <img src="./media/images/announcement.png" style={newsImageStyle} alt="latest announcements"/>
                          <div style={infoContentStyle}>
                            <p>April 14, 2016 has been declared as a national holiday. The forum offices will remain closed across the country.</p>
                          </div>
                        </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-md-12" style={rtiMainColStyle}>
                  <div class="row">
                    <div class="col-md-12" style={rtiColHeadingStyle}>
                      <h4 style={rtiSpanHeadingStyle}>Right to Information</h4>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-12" style={rtiColQuestionStyle}>
                      <span style={rtiQuestionStyle}>Right to Information Act 2005 - Understand the Act</span>
                    </div>
                    <div class="col-md-12" style={rtiColQuestionStyle}>
                      <span style={rtiQuestionStyle}>Access the directory of officers</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="row dyk-section">
            <div class="col-md-1 dyk-heading-section">
              <p class="dyk-span-section">?Did you know</p>
            </div>
            <div class="col-md-3 dyk-col-section">
              <div class="circle">89.73%</div>
              <div class="dyk-para">
                <p>
                  Number of cases filed in the National Commission since its inception is 100856. 89.73% of them have been disposed and 10731 cases are pending.
                </p>
              </div>
            </div>
            <div class="col-md-3 dyk-col-section">
              <div class="circle">400%</div>
              <div class="dyk-para">
                <p>
                  Study shows medical litigation has gone up by 400% due to greater consumer awareness, flexible consumer forums and cost involved in medical services.
                </p>
              </div>
            </div>
            <div class="col-md-3 dyk-col-section">
              <div class="circle">CPI</div>
              <div class="dyk-para">
                <p>
                  Consumer Price Indices (CPI) measure changes over time in general level of prices of goods and services that households acquire for the purpose of consumption.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    );

  }
}
