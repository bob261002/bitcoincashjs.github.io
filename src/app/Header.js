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
              The simple, safe, and powerful JavaScript library for <strong>Bitcoin Cash</strong>. <br />
            </p>
            <div className="npm-stats">
              <img src="https://nodei.co/npm/bitcoincashjs.png" alt="Npm Stats" />
            </div>
            <div className="badges">
              <a href="https://www.npmjs.org/package/bitcoincashjs">
                <img src="https://img.shields.io/npm/v/bitcoincashjs.svg?style=flat-square" alt="NPM Package" />
              </a>
              <a href="https://travis-ci.org/bitcoincashjs/bitcoincashjs">
                <img src="https://img.shields.io/travis/bitcoincashjs/bitcoincashjs.svg?branch=master&style=flat-square" alt="Build Status" />
              </a>
              <a href="https://coveralls.io/r/bitcoincashjs/bitcoincashjs">
                <img src="https://img.shields.io/coveralls/bitcoincashjs/bitcoincashjs.svg?style=flat-square" alt="Coverage Status" />
              </a>
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
