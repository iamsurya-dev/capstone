import React from "react";
import { IndexLink, Link } from "react-router";


export default class Tribunal extends React.Component {

  render() {
    return (
      <section class="tribunal">
        <div class="container">
          <h2>About Us</h2>
          <h4 class="tribunal-heading">Who are we</h4>
          <div class="row">
            <div class="col-md-12">
              <p><strong>The Act</strong></p>
              <p>
                The Consumer Protection Act, 1986 (In short,‘The Act’) is a social legislation that lays down the promotion and protection of consumer rights applicable to all goods* and services*. It provides for the establishment of consumer councils for settlements of consumer disputes. The territorial jurisdiction or legal power of the act extends to the whole of India except Jammu & Kashmir. If the cause of action arises outside of India, the matter cannot be tried in India under this Act.
              </p>
            </div>
          </div>
          <br/>
          <div class="row">
            <div class="col-md-12">
              <p><strong>The Tribunal</strong></p>
              <p>
                Under the context of the Act, the National Consumer Disputes Redressal Commission (NCDRC) was constituted in the year 1988. The President of NCDRC is a sitting or retired Judge of the Supreme Court of India who is appointed in consultation with the Chief Justice of India*. The Chairman of NCDRC is Minister of Consumer Affairs in the Cabinet, The central tribunal office is head quartered at the capital city of New Delhi, India.
              </p>
            </div>
          </div>
          <br/>
          <div class="cta-div">
            <p class="cta-further-options"><strong>Further options</strong></p>
            <img src="../../media/images/cta-arrow.png" class="cta-arrow"/>
            <Link to="help" class="cta-button">
              Refer Legal Dictionary
            </Link>
          </div>
          <br/>
          <h4 class="tribunal-heading">What we do</h4>
          <div class="row">
            <div class="col-md-12">
              <p><strong>The Purpose</strong></p>
              <p>
                The NCDRC and its affiliated bodies are dedicated towards bolstering, safeguarding and strenghtening consumer rights such as -
                <ul>
                  <li>right to be protected against the marketing of goods and services which are hazardous to life and property;</li>
                  <li>right to be informed about the quality, quantity, potency, purity, standard and price of goods or services and unfair trade practices;</li>
                  <li>right to be assured, access to a variety of goods and services at competitive prices;</li>
                  <li>right to be heard and to be assured that consumer's interests will receive due consideration at appropriate forums;</li>
                  <li>right to seek redressal against unfair trade practices or restrictive trade practices or unscrupulous exploitation of con­sumers; and</li>
                  <li>right to consumer education.</li>
                </ul>
              </p>
            </div>
          </div>
          <br/>
          <div class="alert alert-dismissible alert-warning">
            <p><strong>Power of the National Commission to make regulations -</strong></p>
            <ul class="tribunal-bullets">
              <li>The National Commission may, with approval of the Central Government, by notification, make regulations not inconsistent with this Act to provide for all matters for which provision is necessary or expedient for the purpose of giving effect to the provisions of this Act.</li>
              <li>In particular and without prejudice to the generality of the foregoing power, such regulations may make provisions for the cost of adjournment of any proceeding before the District Forum, the State Commission or the National Commission, as the case may be, which a party may be ordered to pay.</li>
            </ul>
          </div>
          <br/>
          <h4 class="tribunal-heading">What we do</h4>
          <div class="row">
            <div class="col-md-12">
              <p><strong>Heirarchy</strong></p>
              <p>
                The Act provides for the establishment of a three-tier structure for simple, speedy and effective consumer disputes redressal. All three agencies are quasi-judicial. The hierarchy from bottom to top is:
              </p>
              <ul class="tribunal-jurisdiction-list">
                <li class="row">
                  <div class="col-md-1">
                    <img src="../../media/images/district.png" class="tribunal-jurisdiction-img"/>
                  </div>
                  <div class="col-md-9 tribunal-jurisdiction-details">
                    <p><strong>District Forums</strong></p>
                    <p>
                      These are the lowest Consumer Courts in the chain of the three redressal agencies the Act mandates  that the State must constitute at least one District Forum in each and every district of the country. Consequently, this forum can entertain all complaints coming from that particular district.
                    </p>
                  </div>
                </li>
                <li class="row">
                  <div class="col-md-1">
                    <img src="../../media/images/state.png" class="tribunal-jurisdiction-img"/>
                  </div>
                  <div class="col-md-9 tribunal-jurisdiction-details">
                    <p><strong>State Commissions</strong></p>
                    <p>
                      These are established at the State level and stand above District Forum in the hierarchy of Consumer Dispute Redressal Forums under the Act. State Commissions are empowered to deal with matters where the value of claim exceeds Rs. 20 lakhs, but does not go beyond Rs. 1 crore.
                    </p>
                  </div>
                </li>
                <li class="row">
                  <div class="col-md-1">
                    <img src="../../media/images/national.png" class="tribunal-jurisdiction-img"/>
                  </div>
                  <div class="col-md-9 tribunal-jurisdiction-details">
                    <p><strong>National Commissions</strong></p>
                    <p>
                      It stands at the top of the hierarchy of all the three redressal agencies and is considered as an apex court because it oversees the functioning of State Commissions and District Forums. The National Commission can entertain all the matters where the value of service or goods exceed Rs. 1 crore.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <br/>
          <h4 class="tribunal-heading">Learn More</h4>
          <p>Want more information on Circuit Benches, Organization Chart or Members of NCDRC? Click here to find out.</p>
        </div>
      </section>
    );
  }
}
