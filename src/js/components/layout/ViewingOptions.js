import React from "react";


export default class Header extends React.Component {
  render() {
    return (
      <header class="viewing-header" role="header">
        <div class="container">
          <span class="viewing-options-text">Viewing Options</span>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <span>
            Contrast
          </span>
          &nbsp;&nbsp;&nbsp;
          <div class="btn-group">
            <a href="#" class="btn btn-default dropdown-toggle viewing-dropdown" data-toggle="dropdown" aria-expanded="false">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <span class="caret">&nbsp; </span>
            </a>
            <ul class="dropdown-menu">
              <li><a href="#">Dropdown link</a></li>
              <li><a href="#">Dropdown link</a></li>
              <li><a href="#">Dropdown link</a></li>
             </ul>
          </div>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <span>
            Language
          </span>
          &nbsp;&nbsp;&nbsp;
          <div class="btn-group">
            <a href="#" class="btn btn-default dropdown-toggle viewing-dropdown" data-toggle="dropdown" aria-expanded="false">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <span class="caret">&nbsp; </span>
            </a>
            <ul class="dropdown-menu">
              <li><a href="#">Dropdown link</a></li>
              <li><a href="#">Dropdown link</a></li>
              <li><a href="#">Dropdown link</a></li>
             </ul>
          </div>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <span>
            Text Size
          </span>
          &nbsp;&nbsp;&nbsp;
          <div class="btn-group">
            <a href="#" class="btn btn-default dropdown-toggle viewing-dropdown" data-toggle="dropdown" aria-expanded="false">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <span class="caret">&nbsp; </span>
            </a>
            <ul class="dropdown-menu">
              <li><a href="#">Dropdown link</a></li>
              <li><a href="#">Dropdown link</a></li>
              <li><a href="#">Dropdown link</a></li>
             </ul>
          </div>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <span class="screen-reader">Screen Reader</span>
        </div>
      </header>
    );
  }
}
