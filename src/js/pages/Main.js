import React from "react";
import { IndexLink, Link } from "react-router";

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
      height: "181px",
      marginBottom: "10px",
    }
    const tileColStyle = {
      paddingLeft: "7px",
      paddingRight: "4px",
      marginLeft: "-10px",

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
    const quickLinkConnect = {
      background: "black",
      color: "white",
      position: "absolute",
      marginLeft: "276px",
      fontWeight: "bold",
      paddingLeft: "5px",
      paddingRight: "2px",
    }
    const leftArrow = {

    }
    const newsConnect = {
      background: "black",
      color: "white",
      float: "right",
      fontSize: "13px",
      fontWeight: "bold",
      paddingLeft: "5px",
      paddingRight: "2px",
    }
    const imageQuickLinkStyle = {
      width: "80%",
      marginTop: "5px",
      marginLeft: "5px",
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
      height: "130px",
      textAlign: "center",
      fontSize: "16px",
    }

    const tileDescriptionStyle = {
      background: "black",
      opacity: "0.8",
      paddingLeft: "5px",
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
                  <a href="#" class="col-md-12 causelist-img">
                    <div style={imgHeadingStyle}>
                      <br/>
                      <p>Can I file a case?</p>
                      <hr class="horizontal-line"/>
                    </div>
                    <div style={tileDescriptionStyle}>
                      <p>Understand the definition of a consumer and their rights.</p>
                    </div>
                  </a>
                </div>
                <div class="col-md-4" style={tileColStyle}>
                  <Link to="case" class="col-md-12 case-type-img">
                    <div style={imgHeadingStyle}>
                      <br/>
                      <p>How to file a case?</p>
                      <hr class="horizontal-line"/>
                    </div>
                    <div style={tileDescriptionStyle}>
                      <p>Find out options and remedies available for consumer grievances</p>
                    </div>
                  </Link>
                </div>
                <div class="col-md-4" style={tileColStyle}>
                  <a href="#" class="col-md-12 access-img">
                    <div style={imgHeadingStyle}>
                      <br/>
                      <p>Searching for a case?</p>
                      <hr class="horizontal-line"/>
                    </div>
                    <div style={tileDescriptionStyle}>
                      <p>Access a case to view status, history judgements and calendar</p>
                    </div>
                  </a>
                </div>
              </div>
              <div class="row" style={tileRowStyle}>
                <div class="col-md-4" style={tileColStyle}>
                  <a href="#" class="col-md-12 act-img">
                    <div style={imgHeadingStyle}>
                      <br/>
                      <p>Read The Act</p>
                      <hr class="horizontal-line"/>
                    </div>
                    <div style={tileDescriptionStyle}>
                      <p>Explore the Consumer Protection Act, 1986 and its amendments</p>
                    </div>
                  </a>
                </div>
                <div class="col-md-4" style={tileColStyle}>
                    <a href="#" class="col-md-12 data-img">
                      <div style={imgHeadingStyle}>
                        <br/>
                        <p>NCDRC Data & Statistics</p>
                        <hr class="horizontal-line"/>
                      </div>
                      <div style={tileDescriptionStyle}>
                        <p>Interact with raw data to generate charts and graphs</p>
                      </div>
                    </a>
                </div>
                <div class="col-md-4" style={tileColStyle}>
                  <Link to="help" class="col-md-12 dictionary-img">
                    <div style={imgHeadingStyle}>
                      <br/>
                      <p>Legal Dictionary</p>
                      <hr class="horizontal-line"/>
                    </div>
                    <div style={tileDescriptionStyle}>
                      <p>Understand complex legal terms through simple explanations</p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
            <div class="col-md-4" style={quickLinkStyle}>
              <div class="row" style={quickLinkRowStyle1}>
                <div>
                  <span style={quickLinkConnect}><span style={leftArrow}> &lt; </span>&nbsp; Let's Connect</span>
                </div>
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
                        <Link to="contact">Click Here for more options</Link>
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
                        <Link to="contact">Connect with an official</Link>
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
                        <Link to="contact">District Forums</Link> | <Link to="contact">State Commissions</Link>
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
                        <a href="#">Court Calendar</a> | <a href="#">Circuit Benches</a> | <a href="#">Causlists</a>
                      </div>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="container">
            <span style={newsConnect}><span style={leftArrow}> &lt; </span>&nbsp; News You Can Use</span>
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
              <div class="dyk-para dyk-para-align1">
                <span>
                  Out of the 100,856 cases filed in NCDRC, 89.73% of them have been closed.
                </span>
                <br/>
                <span class="dyk-readmore">...Read more</span>
              </div>
            </div>
            <div class="col-md-3 dyk-col-section">
              <div class="circle">400%</div>
              <div class="dyk-para dyk-para-align2">
                <span>
                  Study shows medical litigation has increased due to greater consumer awareness, flexible consumer forums and other factors.
                </span>
                <br/>
                <span class="dyk-readmore">...Read more</span>
              </div>
            </div>
            <div class="col-md-3 dyk-col-section">
              <div class="circle">CPI</div>
              <div class="dyk-para dyk-para-align3">
                <span>
                  Consumer Price Indices (CPI) measure changes in level of prices of goods and services that households acquire for the purpose of consumption.
                </span>
                <br/>
                <span class="dyk-readmore">...Read more</span>
              </div>
            </div>
          </div>
        </div>
      </main>
    );

  }
}
