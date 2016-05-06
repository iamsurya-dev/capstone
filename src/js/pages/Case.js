import React from "react";
import { IndexLink, Link } from "react-router";

export default class Case extends React.Component {

  render() {

    return (
      <section class="cases">
        <div class="container">
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
              <Link to="case" class="col-md-12 case-tiles">
                <div>
                  <br/>
                  <p class="case-tile-heading">Consumer Complaint</p>
                  <hr/>
                </div>
                <div class="case-tile-description">
                  <p>
                    It allows an aggrieved consumer to seek redressal via a formal institution. The Act has provided certain grounds on which a complaint can be made. Reliefs are also granted proportionately.
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
                    A person unhappy with the decision of the State Commission or feels that he/she has been wronged can file an appeal with the National Commission to review the State Commission’s decision.
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
                    Some description Here
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
                    Some Description Here
                  </p>
                </div>
              </Link>
            </div>
          </div>
          <br/><br/>
          <div class="alert alert-dismissible alert-info">
            <strong>Heads up!</strong> Refer the <a href="#" class="alert-link">Consumer Protection Act</a> here, to verify your understanding.
          </div>
        </div>
      </section>
    );
  }
}
