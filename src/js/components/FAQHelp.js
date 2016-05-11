import React from "react";

export default class extends React.Component {

  constructor() {
    super();
    this.state = {
      faq1: false,
      faq2: false,
      faq3: false,
      faq4: false,
      faq5: false,
    };
  }

  onFaq1Click() {
    this.setState({faq1: !this.state.faq1});
  }
  onFaq2Click() {
    this.setState({faq2: !this.state.faq2});
  }
  onFaq3Click() {
    this.setState({faq3: !this.state.faq3});
  }
  onFaq4Click() {
    this.setState({faq4: !this.state.faq4});
  }
  onFaq5Click() {
    this.setState({faq5: !this.state.faq5});
  }


  render() {
    const { faqMain } = this.state;

    return (
      <div>
        <br/>
        <div class="content-question container">
          <div class="row">
            <div class="col-md-10 question" onClick={this.onFaq1Click.bind(this)}>
              <img src="../../media/images/steps-complaint.png" class="col-md-1 faq-icon-img"/>
              <p><strong>What is the qualification of the judges who will be hearing my complaint?</strong></p>
            </div>
          </div>
          {
            this.state.faq1 ?
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
              : null
            }
        </div>
        <div class="content-question container">
          <div class="row">
            <div class="col-md-10 question" onClick={this.onFaq2Click.bind(this)}>
              <img src="../../media/images/steps-complaint.png" class="col-md-1 faq-icon-img"/>
              <p><strong>Can I file the case on my own or do I need to engage a lawyer? Additionally can I file it on behalf of someone else?</strong></p>
            </div>
          </div>
          {
          this.state.faq2 ?
            <div class="row">
              <div class="col-md-10 answer">
                <p>
                  You can file a complaint under this Act on your own without hiring any legal professional. The Act aims to bring about a speedy and cost-effective mechanism for redressal of disputes and to fulfill this, it provides for a simple procedure that even someone who is not from a legal background can understand.
                  <br/>
                  Moreover, you can file it on behalf of another person for instance as a beneficiary of those goods/services, as a legal heir/representative of the deceased, relatives of the consumer or on behalf of others if there are numerous consumers having the same interest.
                </p>
              </div>
            </div>
            : null
          }
        </div>
        <div class="content-question container">
          <div class="row">
            <div class="col-md-10 question" onClick={this.onFaq3Click.bind(this)}>
              <img src="../../media/images/steps-complaint.png" class="col-md-1 faq-icon-img"/>
              <p><strong>Do I need to pay a fee for filing the complaint? If yes in what manner and what is the amount?</strong></p>
            </div>
          </div>
          {
          this.state.faq3 ?
            <div class="row">
              <div class="col-md-10 answer">
                <p>
                  Under the original Act, there was no need to pay any court-fee, However, post the amendment of 2002, there is a fee of Rs. 5000 to be paid for filing a complaint in the National Commission in the form of a Demand Draft in favour of  “The Registrar, NCDRC, New Delhi”.
                </p>
              </div>
            </div>
            : null
          }
        </div>
        <div class="content-question container">
          <div class="row">
            <div class="col-md-10 question" onClick={this.onFaq4Click.bind(this)}>
              <img src="../../media/images/steps-complaint.png" class="col-md-1 faq-icon-img"/>
              <p><strong>Are other courts excluded from hearing consumer disputes?</strong></p>
            </div>
          </div>
          {
          this.state.faq4 ?
            <div class="row">
              <div class="col-md-10 answer">
                <p>
                  No. The Consumer Protection Act was enacted so as to reduce the burden on ordinary courts, by creating a three-tier remedial structure that can concentrate on addressing only consumer grievances in a speedy, effective and inexpensive manner. It does not preclude the jurisdiction of ordinary courts to take up matters of consumer disputes.
                </p>
              </div>
            </div>
            :null
          }
        </div>
        <div class="content-question container">
          <div class="row">
            <div class="col-md-10 question" onClick={this.onFaq5Click.bind(this)}>
              <img src="../../media/images/steps-complaint.png" class="col-md-1 faq-icon-img"/>
              <p><strong>Can the complaint be filed in any language?</strong></p>
            </div>
          </div>
          {
          this.state.faq5 ?
            <div class="row">
              <div class="col-md-10 answer">
                <p>
                  No. The complaint must be filed in English. If it has been filed in any other language, a translated copy must be filed along with the original complaint. As per a notice issued on 17th July 2015 by the National Commission, such translated copies must be submitted at least two weeks before the date of the hearing.
                </p>
              </div>
            </div>
            :null
          }
        </div>
      </div>
    );
  }
}
