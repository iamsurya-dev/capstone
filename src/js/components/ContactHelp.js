import React from "react";

export default class extends React.Component {

  render() {
    return (
      <div class="contact-help container">
        <br/>
        <div class="row">
          <div class="col-md-12">
            <p>We highly encourage active communication with citizens. You can connect with us using the channels listed below.</p>
          </div>
        </div>
        <div class="row contact-tile">
          <div class="col-md-6 contact-indv-tile">
            <div class="row">
              <div class="col-md-12 contact-main-col">
                <div class="col-md-2 contact-image-col">
                  <img src="./media/images/call.png" class="contact-image-2" alt="Contact"/>
                </div>
                <div class="col-md-10 contact-description">
                  <p>
                    Have a question?
                    <br/>
                    Call us now! 1800-SOLUTION
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6 contact-indv-tile">
            <div class="row">
              <div class="col-md-12 contact-main-col">
                <div class="col-md-2 contact-image-col">
                  <img src="./media/images/email.png" class="contact-image-2" alt="Contact"/>
                </div>
                <div class="col-md-10 contact-description">
                  <p>
                    Email us! Send us your queries on -
                    <br/>
                    askus@ncdrc.gov.in
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <br/>
        <div class="row">
          <div class="col-md-10">
            <p>You can also visit the forum office in-person. We have highly qualified and motivated staff on-site to help and advise you.</p>
          </div>
        </div>
        <div class="row contact-tile">
          <div class="col-md-6 contact-indv-tile">
            <div class="row">
              <div class="col-md-10 contact-main-col">
                <div class="col-md-2 contact-image-col">
                  <img src="./media/images/address.png" class="contact-image" alt="Contact"/>
                </div>
                <div class="col-md-8 contact-description">
                  <p>
                    Upbhokta Nyay Bhavan F-Block GPO Complex, INA New Delhi 110023
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6 contact-indv-tile">
            <div class="row">
              <div class="col-md-10 contact-main-col">
                <div class="col-md-2 contact-image-col">
                  <img src="./media/images/call-center.png" class="contact-image" alt="Contact"/>
                </div>
                <div class="col-md-8 contact-description">
                  <p>
                    Contact an Official at the Tribunal by <br/>booking an appointment
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
