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
      clicked : "",
      lettersData : [
          {
            name: "C1",
            value: "Consumer",
            details: "Consumer is a consumer who consumes through consumption."
          },
          {
            name: "C2",
            value: "Confonet",
            details: "Confonet is a website which shows confonet and is blue in color."
          }
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
          <div class="col-md-2"></div>
          <div class="col-md-6 legal-description">
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
                    <dl>
                      <dt>{data.value}</dt>
                      <dd>{data.details}</dd>
                    </dl>
                  )
              })
            }
          </div>
        </div>
      </div>
    );
  }
}
