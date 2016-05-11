import React from "react";
import { IndexLink, Link } from "react-router";

export default class extends React.Component {

  render() {

    return(
      <div class="form-complaint">
        <p>
          The forms listed below are in the format accepted by the NCDRC. You can use these while preparing your application packet.
        </p>
        <div class="row">
          <div class="col-md-2">
            Index
          </div>
          <div class="col-md-4">
            <a>Preview</a> &nbsp; | &nbsp; <a>Download</a>
          </div>
        </div>
        <div class="row">
          <div class="col-md-2">
            Memo of Parties
          </div>
          <div class="col-md-4">
            <a>Preview</a> &nbsp; | &nbsp; <a>Download</a>
          </div>
        </div>
        <div class="row">
          <div class="col-md-2">
            Condonation Application
          </div>
          <div class="col-md-4">
            <a>Preview</a> &nbsp; | &nbsp; <a>Download</a>
          </div>
        </div>
        <div class="row">
          <div class="col-md-2">
            List of Dates
          </div>
          <div class="col-md-4">
            <a>Preview</a> &nbsp; | &nbsp; <a>Download</a>
          </div>
        </div>
        <br/><br/>
        <div class="alert alert-dismissible alert-warning">
          If there are any problems while downling the forms, <Link to="contact">Contact Us</Link>.
        </div>
        <p>The one-time for filing a Consumer Complaint is ₹ 5,000.</p>
      </div>
    )
  }
}
