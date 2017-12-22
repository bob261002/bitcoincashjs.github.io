import $ from 'jquery';
import React, { Component } from 'react';

class Header extends Component {
  componentDidMount() {
    displayHeaderTitle('.Header h1');
  }
  render() {
    return (
      <div className="Header">
        <div className="jumbotron jumbotron-fluid">
          <div className="container">
            <h1 className="display">BitcoinCash.js</h1>
            <p className="lead">
              The clean, readable, proven JavaScript library for <strong>Bitcoin Cash</strong>. <br />
              Based on the amazing <em>Bitcore Library</em>.
            </p>
            <div className="npm-stats">
              <img src="https://nodei.co/npm/bitcoincashjs.png" alt="Npm Stats" />
            </div>
            <div className="badges">
              <img src="https://travis-ci.org/bitcoincashjs/bitcoincashjs.png?branch=master" alt="Build Status" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function displayHeaderTitle(headerSelector) {
  const steps = [
    'B',
    'Bi',
    'Bit',
    'Bitc',
    'Bitco',
    'Bitcoi',
    'Bitcoin',
    'Bitcoin<span>C</span>',
    'Bitcoin<span>Ca</span>',
    'Bitcoin<span>Cas</span>',
    'Bitcoin<span>Cash</span>',
    'Bitcoin<span>Cash</span>.',
    'Bitcoin<span>Cash</span>.j',
    'Bitcoin<span>Cash</span>.jx',
    'Bitcoin<span>Cash</span>.j',
    'Bitcoin<span>Cash</span>.',
    'Bitcoin<span>Cash</span>.j',
    'Bitcoin<span>Cash</span>.js',
  ];
  const timeouts = [ 101, 148, 102, 131, 129, 145, 200, 98 ];
  const typeLetter = i => {
    if (i < steps.length) {
      $(headerSelector).html(steps[i]);
      setTimeout(typeLetter, timeouts[i % timeouts.length], i + 1);
    }
  }
  typeLetter(0);
}

export default Header;
