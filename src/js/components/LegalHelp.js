import React from "react";

export default class extends React.Component {
  constructor() {
    super();
    var alphabets = [];
    for(let i=65; i<91; i++) {
      alphabets.push(String.fromCharCode(i));
    }
    this.state = {
      alphabets : alphabets,
      clicked : "A",
      lettersData : [
          {
            name: "A1",
            value: "Admission",
            details: "Once you register your complaint, it is placed before the Court who has the authority to decide whether the case made out by the aggrieved party is substantial or not. If the Court is of the opinion that it is a valid issue, it ‘admits’ the plaint."
          },
          {
            name: "A2",
            value: "Affidavit",
            details: "This is a statement made by a person (in writing), swearing that its contents are true, in the presence of a notary public or an oath commissioner. It is a requirement by the court in many instances to support evidence presented."
          },
          {
            name: "A3",
            value: "Appeal",
            details: "A request to determine the correctness of a verdict or order made by the aggrieved party to a higher court."
          },
          {
            name: "A4",
            value: "Attestation",
            details: "The process of determining how authentic a person’s signature is by an appointed official such as an oath commissioner or a notary public."
          },
          {
            name: "B1",
            value: "Bench",
            details: "The number of judges that sit to hear a matter in court. If a single judge sits to decide a matter it is called a single bench, if there are two judges, it is called a division bench and so on."
          },
          {
            name: "C1",
            value: "Causelist",
            details: "A schedule of cases to be heard by the court on the following day(s). Every court must have a causelist for each working day. The causelist gives details such as the court number, the bench dealing with the cases and the case details like case number, petitioner/respondent etc."
          },
          {
            name: "D1",
            value: "Damages",
            details: "Monetary compensation that the court decides should be awarded to a party in a civil action who has been injured through the wrongful conduct of someone else."
          },
          {
            name: "G1",
            value: "Goods",
            details: "Every kind of movable property; including stock and shares, crops, grass, or things attached to a piece of land; but does not include money itself."
          },
          {
            name: "J1",
            value: "Jurisdiction",
            details: "The degree to which a court’s power extends. It may be with respect to monetary or pecuniary limits, geographical boundaries, nature of proceedings in court, etc. For instance, the pecuniary jurisdiction of the National Commission is complaints of value Rs. 1 crore and above, the geographical jurisdiction is all of India except the State of Jammu & Kashmir."
          },
          {
            name: "P1",
            value: "Petition",
            details: "A written document filed in a court asserting a claim or a right and seeking relief on legal grounds."
          },
          {
            name: "S1",
            value: "Service",
            details: "Service of any description which is made avail­able to potential users and includes, but not limited to, the provision of facilities in connection with banking, financing, insurance, transport, processing, supply of electrical or other energy, board or lodging or both, housing construction, entertainment, amusement or the purveying of news or other information, but does not include the rendering of any service free of charge or under a contract of personal service."
          },
          {
            name: "T1",
            value: "Tribunal",
            details: "A body established to hear disputes. While a tribunal is not the same as a court, it is quite similar to one (the term used is quasi-judicial). They are constituted to reduce the burden on conventional courts and are considered more flexible, effective and speedier than them."
          },
        ]
    }
  }

  letterClick(clickedLetter) {
    const clicked = clickedLetter;
    this.setState({clicked});
  }

  render() {
    const { alphabets, clicked, lettersData } = this.state;

    return(
      <div class="container legal-help">
        <div class="row">
          <div class="col-md-2"></div>
          <div class="col-md-8">
            <p>
              Use the search feature to look for meanings of legal terms that are difficult to understand . You can enter a keyword or a phrase or in the search bar below. Alternatively you can look up the terms from the alphabetical list.
            </p>
          </div>
        </div>
        <div class="row search-legal">
          <div class="col-md-2">
          </div>
          <div class="col-md-6">
            <div class="form-group">
              <div class="input-group">
                <span class="input-group-addon">Enter keyword</span>
                <input type="text" class="form-control"/>
                <span class="input-group-btn">
                  <button class="btn btn-default" type="button">Search</button>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-2">

          </div>
          <div class="col-md-8">
            {
              alphabets.map((letter, i) => <div class="letters-legal"><a class="link-legal" onClick={this.letterClick.bind(this, letter)}>{letter}</a></div>)
            }
          </div>
        </div>
        <div class="row">
          <div class="col-md-1"></div>
          <div class="col-md-8 legal-description">
            <br/>
            {
              this.state.lettersData
                .filter(function(data, i, arr) {
                  if(this.state.clicked != "")
                    return data.name && data.name.indexOf(this.state.clicked) === 0;
                  else {
                    return false;
                  }
                }, this).
                map(function(data, index) {
                  return (
                    <div>
                      <dl>
                        <dt>{data.value}</dt>
                        <dd>{data.details}</dd>
                      </dl>
                    </div>
                  )
              })
            }
          </div>
        </div>
      </div>
    );
  }
}
