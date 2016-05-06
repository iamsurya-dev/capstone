import React from "react";

export default class CaseType extends React.Component {
  render() {
    return (
      <section class="case-type">
        {this.props.children}
      </section>
    )
  }
}
