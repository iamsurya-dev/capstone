import React from "react";
import ConsumerComplaintsTypes from "../components/ConsumerComplaintsTypes";
import FormsComplaint from "../components/FormsComplaint";
import LifecycleComplaint from "../components/LifecycleComplaint";
import StepsComplaint from "../components/StepsComplaint";



export default class ConsumerComplaint extends React.Component {
  constructor() {
    super();
  }

  render() {

    return (
      <section class="consumer-complaint">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <h3>Consumer Complaints</h3>
              <p>
                This page will give you all the relevant information you need for understanding and filing consumer complaints. A consumer complaint can be filed by an individual by themselves, hiring a lawyer is not mandatory.
              </p>
            </div>
          </div>
          <br/>
          <div class="row">
            <div class="col-md-12">
              <ul class="nav nav-tabs complaint-tabs" >
                <li class="active col-md-3"><a href="#types" class="complaint-main-link" data-toggle="tab">Types of Complaints</a></li>
                <li class="col-md-3"><a href="#steps" class="complaint-main-link" data-toggle="tab">Steps to File a Complaint</a></li>
                <li class="col-md-3"><a href="#lifecycle" class="complaint-main-link" data-toggle="tab">Lifecyle of a Complaint</a></li>
                <li class="col-md-3"><a href="#forms" class="complaint-main-link" data-toggle="tab">Forms, Fees etc.</a></li>
              </ul>

              <div id="myTabContent" class="tab-content">
                <div class="tab-pane fade active in" id="types">
                  <ConsumerComplaintsTypes/>
                </div>
                <div class="tab-pane fade" id="steps">
                  <StepsComplaint/>
                </div>
                <div class="tab-pane fade" id="lifecycle">
                  <LifecycleComplaint/>
                </div>
                <div class="tab-pane fade" id="forms">
                  <FormsComplaint/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
