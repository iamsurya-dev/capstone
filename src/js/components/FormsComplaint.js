import React from "react";
import { IndexLink, Link } from "react-router";

export default class extends React.Component {

  render() {

    return(
      <div class="form-complaint">
        <h4>Forms</h4>
        <p>
          The forms listed below are in the format accepted by the NCDRC. You can use these while preparing your application packet. If there are any problems while downling the forms, <Link to="contact">contact us</Link>.
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
      </div>
    )
  }
}
