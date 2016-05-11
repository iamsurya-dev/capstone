import React from "react";
import { IndexLink, Link } from "react-router";

export default class Consumer extends React.Component {
  render() {
    return (
      <section class="consumer">
        <h2><strong>Can I file a case?</strong></h2>
        <p>
          Every citizen of India has the right to file a case if they fit in the definition of a consumer. A case is generally filed when the person feels that one or more of their consumer rights have been violated. Read through the explanations below for a better understanding.
        </p>
        <br/>
        <h4>Who is a consumer?</h4>
        <p>
          As per the laws laid down by The Consumer Protection Act, a consumer is defined as:
          <br/>- anyone who buys any goods or services through full, partial, promised or any other legal mode of payment
          <br/>- any user of goods or services, who is using them with the permission of the person who has purchased them as above
          <br/>- a self-employed person or person whose livelihood depends on using or doing business with the goods or services purchased as above
          <br/><br/>This definition <strong>does not apply</strong> to cases where the goods or services are purchased for resale or any other commercial purposes.
        </p>

        <br/>
        <div class="alert alert-dismissible alert-warning">
          Other than an individual, the term 'person' includes:
          <ul class="consumer-list">
            <li>a firm, whether registered or not</li>
            <li>a Hindu undivided family</li>
            <li>a co-operative society</li>
            <li>every other association of persons whether registered under the Societies Registration Act, 1860 (21 of 1860) or not</li>
          </ul>
        </div>
        <div class="cta-div">
          <p class="cta-further-options"><strong>Further options</strong></p>
          <img src="../../media/images/cta-arrow.png" class="cta-arrow"/>
          <Link to="act" class="cta-button">
            Refer Consumer Protection Act
          </Link>
        </div>
        <br/>
        <h4>Consumer Rights</h4>
        <p>The National Consumer Disputes Redressal Commission (NCDRC) and its affiliated bodies are dedicated towards bolstering, safeguarding and strengthening consumer rights such as -</p>
        <ul class="consumer-list">
          <li>right to be protected against the marketing of goods and services which are hazardous to life and property</li>
          <li>right to be informed about the quality, quantity, potency, purity, standard and price of goods or services and unfair trade practices</li>
          <li>right to be assured, access to a variety of goods and services at competitive prices</li>
          <li>right to be heard and to be assured that consumer's interests will receive due consideration at appropriate forums</li>
          <li>right to seek redressal against unfair trade practices or restrictive trade practices or unscrupulous exploitation of con­sumers</li>
          <li>right to consumer education</li>
        </ul>
        <br/>
        <div class="cta-div">
          <p class="cta-further-options"><strong>Further options</strong></p>
          <img src="../../media/images/cta-arrow.png" class="cta-arrow"/>
          <Link to="tribunal" class="cta-button">
            Understand Jurisdiction
          </Link>
          <Link to="case" class="cta-button">
            Types of Cases and Judgements
          </Link>
          <Link to="case/complaint" class="cta-button">
            File a Consumer Complaint
          </Link>
        </div>
      </section>
    )
  }
}
