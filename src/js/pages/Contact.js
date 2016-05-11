import React from "react";

export default class Contact extends React.Component {
  constructor() {
    super();
    this.state = {
      stateName: "",
      districtName: "",
      states: [
        {
          name: "Gujarat",
          address: "Grahak Bhavan, Nr. Gota Cross Road, \n S.G. Highway, Ahmedabad -380 060 \n Gujarat, India",
          phone: "02717-241614",
          fax: "02717-241641",
          email: "cdrcgujaratstate@gmail.com",
        }
      ],
      districts: [
        {
          name: "Surat",
          address: "Grahak Bhavan, Nr. S. M. Quarters, Beside \n Ekata Society, Umra Surat-380 060 \n Gujarat, India",
          phone: "0261-2213221",
          fax: "0261-2213224",
          email: "cdrfsuratadd@gmail.com",
        }
      ]
    }
  }

  stateClicked(event) {
    const stateName = event.target.value;
    this.setState({stateName});
  }

  districtClicked(event) {
    const districtName = event.target.value;
    this.setState({districtName});
  }

  render() {
    return(
      <section class="contact">
        <div class="container">
          <h4>Contact Us</h4>
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
                    <img src="./media/images/call.png" class="contact-image" alt="Contact"/>
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
                    <img src="./media/images/email.png" class="contact-image" alt="Contact"/>
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
            <div class="col-md-12">
              <p>You can also visit the forum office in-person. We have highly qualified and motivated staff on-site to help and advise you.</p>
            </div>
          </div>
          <div class="row contact-tile">
            <div class="col-md-6 contact-indv-tile">
              <div class="row">
                <div class="col-md-12 contact-main-col">
                  <div class="col-md-2 contact-image-col">
                    <img src="./media/images/address.png" class="contact-image" alt="Contact"/>
                  </div>
                  <div class="col-md-10 contact-description">
                    <p>
                      Upbhokta Nyay Bhavan F-Block GPO Complex,<br/>
                      INA New Delhi 110023
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-6 contact-indv-tile">
              <div class="row">
                <div class="col-md-12 contact-main-col">
                  <div class="col-md-2 contact-image-col">
                    <img src="./media/images/call-center.png" class="contact-image" alt="Contact"/>
                  </div>
                  <div class="col-md-10 contact-description">
                    <p>
                      Contact an Official at the Tribunal by <br/>booking an appointment
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <br/>
          <div class="row">
            <div class="col-md-12">
              <p>There are forum offices at the State and District levels. Please use the below fields to filter forums based on geographical division.</p>
            </div>
          </div>
          <div class="row offices-tile">
            <div class="col-md-6 contact-indv-tile">
              <div class="row">
                <div class="col-md-12 contact-main-col form-group">
                  <label for="select" class="col-md-2 control-label contact-label">State</label>
                  <div class="col-md-8">
                    <select class="form-control" id="select" value={this.state.stateName} onChange={this.stateClicked.bind(this)}>
                      <option selected value="">Choose one</option>
                      <option value="Maharashtra">Maharashtra</option>
                      <option value="Gujarat">Gujarat</option>
                    </select>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-2"></div>
                  <div class="col-md-10">
                    <p class="contact-details">Contact Details</p>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-2"></div>
                  <div class="col-md-10">
                  {
                    this.state.states
                      .filter(function(data, i, arr) {
                        if(this.state.stateName != "")
                          return data.name && data.name.indexOf(this.state.stateName) === 0;
                        else {
                          return false;
                        }
                      }, this).
                      map(function(data, index) {
                        const add = data.address;
                        return (
                          <div class="contact-address">
                            {add.split("\n").map(function(item) {
                              return(
                                <span>
                                  {item}<br/>
                                </span>
                              )
                            })}
                            <br/>
                            <span>Phone: {data.phone}</span><br/>
                            <span>Fax: {data.fax}</span><br/>
                            <span>Email: {data.email}</span><br/>
                          </div>
                        )
                    })
                  }
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-6 contact-indv-tile">
              <div class="row">
                <div class="col-md-12 contact-main-col form-group">
                  <label for="select" class="col-md-2 control-label contact-label">District</label>
                  <div class="col-md-8">
                    <select class="form-control" id="select" value={this.state.districtName} onChange={this.districtClicked.bind(this)}>
                      <option selected value="">Choose one</option>
                      <option value="Surat">Surat</option>
                      <option value="Thane">Thane</option>
                    </select>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-2"></div>
                  <div class="col-md-10">
                    <p class="contact-details">Contact Details</p>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-2"></div>
                  <div class="col-md-10">
                  {
                    this.state.districts
                      .filter(function(data, i, arr) {
                        if(this.state.districtName != "")
                          return data.name && data.name.indexOf(this.state.districtName) === 0;
                        else {
                          return false;
                        }
                      }, this).
                      map(function(data, index) {
                        const add = data.address;
                        return (
                          <div class="contact-address">
                            {add.split("\n").map(function(item) {
                              return(
                                <span>
                                  {item}<br/>
                                </span>
                              )
                            })}
                            <br/>
                            <span>Phone: {data.phone}</span><br/>
                            <span>Fax: {data.fax}</span><br/>
                            <span>Email: {data.email}</span><br/>
                          </div>
                        )
                    })
                  }
                  </div>
                </div>
              </div>
            </div>
          </div>
          <br/>
          <div class="row">
            <div class="col-md-12">
              <p>If you have any questions or general comments about the website and its content, please fill this form.</p>
            </div>
          </div>
          <div class="row forms-tile">
            <div class="col-md-6 forms-col">
              <div class="row forms-row">
                <div class="form-group">
                  <label for="inputfName" class="col-md-3 control-label forms-label">First Name</label>
                  <div class="col-md-8">
                    <input type="text" class="form-control" placeholder="First Name"/>
                  </div>
                  <br/>
                </div>
              </div>
              <div class="row forms-row">
                <div class="form-group">
                  <label for="inputlName" class="col-md-3 control-label forms-label">Last Name</label>
                  <div class="col-md-8">
                    <input type="text" class="form-control" placeholder="Last Name"/>
                  </div>
                  <br/>
                </div>
              </div>
              <div class="row forms-row">
                <div class="form-group">
                  <label for="inputEmail" class="col-md-3 control-label forms-label">Email</label>
                  <div class="col-md-8">
                    <input type="text" class="form-control" id="inputEmail" placeholder="Email"/>
                  </div>
                  <br/>
                </div>
              </div>
              <div class="row forms-row">
                <div class="form-group">
                  <label for="inputNumber" class="col-md-3 control-label forms-label">Contact Number</label>
                  <div class="col-md-8">
                    <input type="text" class="form-control" placeholder="Contact Number"/>
                  </div>
                  <br/>
                </div>
              </div>
            </div>
            <div class="col-md-6 forms-col">
              <div class="row form-group forms-row">
                <label for="feedBackArea" class="col-md-2 control-label forms-label">Feedback</label>
                <div class="col-md-10">
                  <textarea class="form-control" rows="6"></textarea>
                </div>
              </div>
              <div class="row">
                <button type="submit" class="btn btn-primary forms-submit">Submit</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
