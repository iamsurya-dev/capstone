import React from "react";

export default class Disclaimer extends React.Component {

  render() {
    return(
      <section class="contact">
        <div class="container">
          <h2><strong>Disclaimer</strong></h2>
          <p>
            This website is a re-designed version of the National Consumer Disputes Redressal Commission of India website for an academic project. The original version can be accessed at <a href="http://ncdrc.nic.in/" target="#">http://ncdrc.nic.in/</a>.
            <br/><br/>
            The content on this portal is created by students and is not intended to disseminate legal information, as it is just for representational purposes.
          </p>
        </div>
      </section>
    );
  }
}
