import React from "react";
import { IndexLink, Link } from "react-router";

export default class Case extends React.Component {

  render() {

    return (
      <section class="cases">
        <div class="container">
          <h2>How to file a case?</h2>
          <p>A consumer can file a case if one or more of their rights are violated. There are four ways a person can file a case with the National Consumer Disputes Redressal Commission (NCDRC) or its affiliated bodies. Read through the page to understand types of cases and remedies.</p>
          <br/>
          <h4>Types of Cases</h4>
          <div class="row">
            <div class="col-md-12">
              <p>
                As per the structure of the Consumer Protection Act, 1986, a person shall find himself/herself in the following four situations. The Court has the power to do either of these ‘suo moto’ or on its own, but typically is carried out by the individual himself/herself. These are filing a complaint, filing an appeal, transfer application, revision petition.
              </p>
            </div>
          </div>
          <br/>
          <div class="row">
            <div class="col-md-3">
              <Link to="case/complaint" class="col-md-12 case-tiles">
                <div>
                  <br/>
                  <p class="case-tile-heading">Consumer Complaint</p>
                  <hr/>
                </div>
                <div class="case-tile-description">
                  <p>
                    A person whose Consumer Rights are violated, can file a complaint to seek justice
                  </p>
                </div>
              </Link>
            </div>
            <div class="col-md-3">
              <Link to="case" class="col-md-12 case-tiles">
                <div>
                  <br/>
                  <p class="case-tile-heading">First Appeal</p>
                  <hr/>
                </div>
                <div class="case-tile-description">
                  <p>
                    A person dissatistifed with the decision of a lower court can file an appeal to a higher court
                  </p>
                </div>
              </Link>
            </div>
            <div class="col-md-3">
              <Link to="case" class="col-md-12 case-tiles">
                <div>
                  <br/>
                  <p class="case-tile-heading">Revision Petition</p>
                  <hr/>
                </div>
                <div class="case-tile-description">
                  <p>
                    An ongoing dispute in a lower court can be summoned for scruitiny by NCDRC
                  </p>
                </div>
              </Link>
            </div>
            <div class="col-md-3">
              <Link to="case" class="col-md-12 case-tiles">
                <div>
                  <br/>
                  <p class="case-tile-heading">Transfer Petition</p>
                  <hr/>
                </div>
                <div class="case-tile-description">
                  <p>
                    A complaint can be transferred by NCDRC to another Forum or Commission at any stage
                  </p>
                </div>
              </Link>
            </div>
          </div>
          <br/><br/>
          <div class="alert alert-dismissible alert-warning">
            A Consumer Complaint is a <strong>pre-requisite</strong> for Appeal, Revision Petition and Transfer Application.
          </div>
          <div class="alert alert-dismissible alert-success">
            Verify your status as a consumer and view Consumer Rights. <Link to="consumer" class="alert-link">Click here</Link>.
          </div>
          <h4>Remedies Available</h4>
          <p>
            If a judge is convinced that the goods in question suffer from any of the defects specified in the complaint, or that any of the allegations contained in the complaint about the services are proven, an order will be issued for provision of one or more remedies.
          </p>
          <br/>
          <div class="row">
            <div class="col-md-4">
              <p class="remedy-title">Award of Compensation</p>
              <p>
                The opposite party will pay a compensation to the consumer for any loss or injury suffered by the consumer due to the negligence of the opposite party.
              </p>
            </div>
            <div class="col-md-4">
              <p class="remedy-title">Removal of Defect/Deficiency</p>
              <p>
                The opposite party will remove the identified defect or deficiency from goods or services respectively
              </p>
            </div>
            <div class="col-md-4">
              <p class="remedy-title">Discontinuance of Trade Practice</p>
              <p>
                The opposite party will discontinue the Unfair/Restrictive trade practice
              </p>
            </div>
          </div>
          <br/>
          <div class="row">
            <div class="col-md-4">
              <p class="remedy-title">Payment of Adequate Cost</p>
              <p>
                The opposite party will pay an amount to the consumer for cost incurred or charges paid for goods or services
              </p>
            </div>
            <div class="col-md-4">
              <p class="remedy-title">Replacement of Goods</p>
              <p>
                The opposite party will replace defective goods with new goods of similar description
              </p>
            </div>
            <div class="col-md-4">
              <p class="remedy-title">Banning Hazardous Goods</p>
              <p>
                The opposite party will stop the sale/production of hazardous goods or services. They will also pay compensation to the impacted consumers. A corrective advertisement will be issued at the cost of opposite party.
              </p>
            </div>
          </div>
          <div class="alert alert-dismissible alert-success">
            Refer the <strong>Legal Dictionary</strong> to understand a term. <Link to="help" class="alert-link">Click here</Link>.
          </div>
        </div>
      </section>
    );
  }
}
