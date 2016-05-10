import React from "react";
import { IndexLink, Link } from "react-router";

export default class extends React.Component {
  constructor() {
    super();
    this.state = {
      child1: false,
      child2: false,
      child3: false,
      child4: false,
      child5: false,
      child6: false
    };
  }

  onChild1Click() {
    this.setState({child1: !this.state.child1});
  }
  onChild2Click() {
    this.setState({child2: !this.state.child2});
  }
  onChild3Click() {
    this.setState({child3: !this.state.child3});
  }
  onChild4Click() {
    this.setState({child4: !this.state.child4});
  }
  onChild5Click() {
    this.setState({child5: !this.state.child5});
  }
  onChild6Click() {
    this.setState({child6: !this.state.child6});
  }
  render() {

    return (
      <div class="consumer-complaint">
        <p>The Consumer Protection Act classifies complaints into the following categories</p>
        <div class="row">
          <div class="col-md-4">
            <p class="remedy-title">Unfair Trade Practice</p>
            <p>
              When a trader or service provider (for the purpose of profit) adopts wrong practices such as: making misleading and false statements about the product or service regarding its standard, grade, quality, performance, life or use; or gives any warranty which has not been tested; or makes sale of the product/service conditional on the purchase of something else.
            </p>
            <p class="complaints-type-example" onClick={this.onChild1Click.bind(this)}><strong>Click here to view an example</strong></p>
            {
              this.state.child1 ?
                <p>
                  Kunal, car-dealer who is engaged in the business of selling new and second-hand cars, sold a six months old car to Maria representing it to be a new one. Here Maria can make a complaint against Kunal for following an unfair trade practice.
                </p>
              : null
            }

          </div>
          <div class="col-md-4">
            <p class="remedy-title">Defective Goods</p>
            <p>
              This covers any fault, imperfection or shortcoming in the quality, quantity, potency, purity or standard of a good which should be maintained or is claimed by the trader. The Act specifically lays down what it means by the term defect and recognises only those defects which are covered by the definition.
            </p>
            <p class="complaints-type-example" onClick={this.onChild2Click.bind(this)}><strong>Click here to view an example</strong></p>
            {
              this.state.child2 ?
                <p>
                  Nausheen bought a computer from Gaurav, a trader engaged in the business of dealing with computers and laptops. It stopped working in a few days. Nausheen can make a complaint against Gaurav for supplying her a defective computer.
                </p>
              : null
            }
          </div>
          <div class="col-md-4">
            <p class="remedy-title">Deficient Services</p>
            <p>
              This includes providing facilities in connection with banking, financing, insurance, transport, entertainment, etc. as defined by The Act under the term 'service'. It does not include services rendered free of charge or under a contract of personal service.
            </p>
            <p class="complaints-type-example" onClick={this.onChild3Click.bind(this)}><strong>Click here to view an example</strong></p>
            {
              this.state.child3 ?
                <p>
                  Shreya hired services of an advocate who failed to be present when he was needed, causing her to lose a case. Shreya can make a complaint against the advocate.
                </p>
              : null
            }
          </div>
        </div>
        <br/>
        <div class="row">
          <div class="col-md-4">
            <p class="remedy-title">Price Contravention</p>
            <p>
              This complaint entails that a trader has charged a price in excess of the price fixed by law or as displayed on the product.
            </p>
            <p class="complaints-type-example" onClick={this.onChild4Click.bind(this)}><strong>Click here to view an example</strong></p>
            {
              this.state.child4 ?
                <p>
                  Ashwin bought a sack of cement from Dwarkesh who charged him Rs. 100 over and above the price of cement as declared by the Government. Here Ashwin can make a complaint against Dwarkesh.
                </p>
              : null
            }
          </div>
          <div class="col-md-4">
            <p class="remedy-title">Hazardous Goods</p>
            <p>
              The Act upholds physical safety of consumers from goods that may be dangerous or risky. It also ensures that the suppliers/ vendors/ retailers/ importers/ exporters bringing such goods to the market, take responsibility that while in their care, these goods are not rendered unsafe through improper handling or storage.
            </p>
            <p class="complaints-type-example" onClick={this.onChild5Click.bind(this)}><strong>Click here to view an example</strong></p>
            {
              this.state.child5 ?
                <p>
                  Nandi bought an insecticide from Varun, a trader. Varun did not inform Nandi that touching this insecticide with bare hands can create skin prob­lems, nor was it mentioned anywhere on the packaging. Nandi subsequently suffered from severe skin rashes. Here Varun can be held liable under the Act.
                </p>
              : null
            }
          </div>
          <div class="col-md-4">
            <p class="remedy-title">Hazardous Services</p>
            <p>
              Earlier, the Act only accounted for ‘hazardous goods’ however, later ‘hazardous services’ was introduced to widen the scope and include all those services that were dangerous or risky to a consumer’s well-being.
            </p>
            <p class="complaints-type-example" onClick={this.onChild6Click.bind(this)}><strong>Click here to view an example</strong></p>
            {
              this.state.child6 ?
                <p>
                  Namrata went to a hospital for getting an ultrasound, as advised by her doctor. The physician performing the ultrasound mis-read the prescription and went ahead with the process setting the levels higher than prescribed. Namrata was over-exposed to x-rays which led to certain side-effects. Namrata can make a complaint against the physician.
                </p>
              : null
            }
          </div>
        </div>
      </div>
    );
  }
}
