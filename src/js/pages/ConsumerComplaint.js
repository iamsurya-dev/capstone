import React from "react";
import ConsumerComplaintsTypes from "../components/ConsumerComplaintsTypes";
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
              <img src="./media/images/help.jpg" alt="help" class="complaint-image"/>
              <ul class="nav nav-tabs complaint-tabs" >
                <li class="active col-md-3"><a href="#types" class="complaint-main-link" data-toggle="tab">Types of Complaints</a></li>
                <li class="col-md-3"><a href="#steps" class="complaint-main-link" data-toggle="tab">Steps to File a Complaint</a></li>
                <li class="col-md-3"><a href="#lifecycle" class="complaint-main-link" data-toggle="tab">Lifecyle of Complaints</a></li>
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
                  <p>Etsy mixtape wayfarers, ethical wes anderson tofu before they sold out mcsweeneys organic lomo retro fanny pack lo-fi farm-to-table readymade. Messenger bag gentrify pitchfork tattooed craft beer, iphone skateboard locavore carles etsy salvia banksy hoodie helvetica. DIY synth PBR banksy irony. Leggings gentrify squid 8-bit cred pitchfork.</p>
                </div>
                <div class="tab-pane fade" id="forms">
                  <p>Food truck fixie locavore, accusamus mcsweeneys marfa nulla single-origin coffee squid. Exercitation +1 labore velit, blog sartorial PBR leggings next level wes anderson artisan four loko farm-to-table craft beer twee. Qui photo booth letterpress, commodo enim craft beer mlkshk aliquip jean shorts ullamco ad vinyl cillum PBR. Homo nostrud organic, assumenda labore aesthetic magna delectus mollit.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
