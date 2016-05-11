import React from "react";
import { IndexLink, Link } from "react-router";

export default class extends React.Component {
  constructor() {
    super();
    this.state = {
      steps1: false,
      steps2: false,
      steps3: false,
    };
  }

  onSteps1Click() {
    this.setState({steps1: !this.state.steps1});
  }
  onSteps2Click() {
    this.setState({steps2: !this.state.steps2});
  }
  onSteps3Click() {
    this.setState({steps3: !this.state.steps3});
  }

  render() {

    return(
      <div class="steps-complaint">
        <p>
          We understand that documentation to file for a consumer complaint can be overwhelming. We have taken the best efforts to make this process as seamless as possible. Please refer the steps in the order given below and your application packet will be ready in no time!
        </p>
        <div>
          <img src="../../media/images/steps-complaint.png" class="col-md-1 steps-complaint-img"/>
          <span  class="col-md-11 steps-heading" onClick={this.onSteps1Click.bind(this)}>Before you prepare the application packet</span>
          <br/><br/>
          {
            this.state.steps1 ?
            <div class="steps-div">
            <div class="steps-bullets">
              <ul>
                <li>
                  The NCDRC accepts consumer complaints of those goods and services whose value and/or compensation (if applicable) is greater than Rupees One Crore ( ₹ 1,00,00,000 ).
                </li>
                <li>
                  It is mandatory to file the consumer complaint within a period of 2 years from the date the cause of action occurs.
                </li>
                <li>
                  The consumer complaint can be filed on all working days (Monday to Friday) from 10.00 AM to 4.30 PM at the Central office.
                </li>
              </ul>
            </div>
            <div class="alert alert-dismissible alert-warning">
              Please make sure to check for bank holidays before deciding to approach the central office.
            </div>
            </div>
            : null
          }
        </div>
        <div>
          <img src="../../media/images/steps-complaint.png" class="col-md-1 steps-complaint-img"/>
          <span  class="col-md-11 steps-heading" onClick={this.onSteps2Click.bind(this)}>Prepare your application packet</span>
          <br/><br/>
          {
            this.state.steps2 ?
            <div class="steps-div">
              <p>Please note the formatting guidelines required for the application packet on the whole.</p>
              <div class="steps-bullets">
                <ul>
                  <li>
                    <strong>Language</strong> - the application packet should be filed in English only. If any other language is being used to file the complaint, then the application should be traslated to English.
                  </li>
                  <li>
                    <strong>Legibility</strong> - if any document in the application packet is not readable, it will not be accepted. Photo copies of any document should be legible..
                  </li>
                  <li>
                    <strong>Format</strong> - the documents of the application packet should be typed, with double line spacing on one side of the paper.
                  </li>
                </ul>
              </div>
              <div class="alert alert-dismissible alert-warning">
                If these guidelines are not adhered to, then the application packet will not be accepted at the drop-off counter.
              </div>
              <p>The following list of documents are mandated by law for submission at the central office.</p>
              <div class="steps-bullets">
                <ul>
                  <li>
                    <strong>Index</strong>. This document should enlist names of the attached documents.
                  </li>
                  <li>
                    <strong>List of Dates</strong>. This document should contain the dates of the events that led to filing of the complaint in a chronological order.
                  </li>
                  <li>
                    <strong>Memo of Parties</strong>. This document should contain background information of the parties with accurate addresses and contact information)
                  </li>
                  <li>
                    <strong>Complaint with notarised attested affidavit</strong>. This document should contain the contents of the complaint being filed. Learn how to create a <a>notarised attested affidavit</a>.
                  </li>
                  <li>
                    <strong>Supporting documents</strong>. Any trasactory or written documentation exchanged between the parties should be attached here. For example, receipts, vouchers, warranty information etc.
                  </li>
                  <li>
                    <strong>Condonation of delay application</strong>. If the filing is being done after the cause of action date (i.e. 2 years after the occurrence of the incident), an application seeking forgiveness should also be attached.
                  </li>
                  <li>
                    <strong>Demand Draft</strong>. A DD of Rupees Five Thousand ( ₹ 5,000 ) in favor of 'The Registrar, NCDRC, New Delhi'.
                  </li>
                </ul>
              </div>
            </div>
            : null
          }
        </div>
        <div>
          <img src="../../media/images/steps-complaint.png" class="col-md-1 steps-complaint-img"/>
          <span  class="col-md-11 steps-heading" onClick={this.onSteps3Click.bind(this)}>Submitting the application packet</span>
          <br/><br/>
          {
            this.state.steps3 ?
            <div class="steps-div">
              <p>Before submitting the application packet at the drop-off counter, keep the following guidelines in mind -</p>
              <div class="steps-bullets">
                <ul>
                  <li>
                    Once the consumer complaint is accepted by the NCDRC, a notice of issue will be released to the opposing parties. Thereafter, any documents submitted should be in the order of 1 original and 3 copies.
                  </li>
                  <li>
                    The NCDRC mandates submission of following -
                    <ul>
                      <li>1 original application packet</li>
                      <li>3 copies of the application packet</li>
                      <li>X copies of the application packet where X is the number of opposite parties</li>
                    </ul>
                  </li>
                  <li>
                    A complaint can be filed at the tribunal office in-person or it can be sent as a package through registered post.
                  </li>
                </ul>
              </div>
              <div class="alert alert-dismissible alert-warning">
                In case you do not receive the free certified copy of court order, you must make a written application on Letter Head with signature & rubber stamp by counsel, stating that the first free certified copy has not been received either by the party-in-person or their counsel. The duplicate copy will be chargeable and will contain a declaration that the original was not received by the party-in-person or their counsel.
              </div>
            </div>
            : null
          }
        </div>
      </div>
    );
  }
}
