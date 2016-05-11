import React from "react";

var ScrollLink = React.createClass({
  getInitialState: function() {
    return {
      scrollTop: 0
    };
  },
  componentWillMount: function() {
    window.addEventListener('scroll', this.handleScroll);
  },
  componentWillUnmount: function() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  handleScroll: function() {
     this.setState({scrollTop: $(window).scrollTop()});
  },
  scrollToTop: function() {
    $(window).animate({scrollTop: 0}, this.props.duration);
  },
  render: function() {
    if (this.state.scrollTop < this.props.offset) {
      return null;
    }

    return <a href="#" className="move-top" onClick={this.scrollToTop}>↑</a>
  }
});
