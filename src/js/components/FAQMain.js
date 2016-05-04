import React from "react";

export default class extends React.Component {
  render() {
    const { question } = this.props;

    const faqColQuestionStyle = {
      border: "1px lightgray solid",
    }

    const faqQuestionStyle = {
      display: "inline-block",
      marginTop: "8px",
      marginBottom: "8px",
      fontSize: "13px",
    }
    return (
      <div class="col-md-12" style={faqColQuestionStyle}>
        <span style={faqQuestionStyle}>{question}</span>
      </div>
    );
  }
}
