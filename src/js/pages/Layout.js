import React from "react";
import { Link } from "react-router";

import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";
import Nav from "../components/layout/Nav";
import ScrollLink from "../components/layout/ScrollLink";
import ViewingOptions from "../components/layout/ViewingOptions";


export default class Layout extends React.Component {


  render() {
    const { location } = this.props;
    const containerStyle = {
      marginTop: "40px"
    };


    return (
      <div>
        <ViewingOptions/>
        <Header/>
        <Nav location={location} />

        <div class="container page-wrap" style={containerStyle}>
          <div class="row">
            <div class="col-lg-12">
              {this.props.children}
            </div>
          </div>
        </div>
        <Footer/>
      </div>
    );
  }
}
