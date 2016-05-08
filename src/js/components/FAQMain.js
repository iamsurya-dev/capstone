import React from "react";
import { IndexLink, Link } from "react-router";

export default class extends React.Component {
  render() {
    const { question } = this.props;

    const faqColQuestionStyle = {
      border: "1px lightgray solid",
    }

    const faqQuestionStyle = {
      display: "inline-block",
      marginTop: "9px",
      marginBottom: "9px",
      fontSize: "13px",
    }
    return (
      <Link to="help" class="col-md-12 faq-questions">
        <span style={faqQuestionStyle}>{question}</span>
      </Link>
    );
  }
}
