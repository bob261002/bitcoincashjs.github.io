import React, { Component } from 'react';

class About extends Component {
  render() {
    return (
      <div id="About" className="About">
        <h1>About Bitcoin Cash</h1>
        <p>
          <a href="https://bitcoincash.org/" target="_blank" rel="noopener noreferrer">Bitcoin Cash</a> is peer-to-peer electronic cash for the Internet. It is a fully decentralized network without a central bank and requires no trusted third-parties to operate. Bitcoin Cash is the continuation of the Bitcoin project, upgraded with consensus rules that allow it to grow and scale.
        </p>
        <h1>About Bitcoin<span>Cash</span>.js:</h1>
        <p>
          <a href="https://github.com/bitcoincashjs/bitcoincashjs">BitcoinCash.js</a> is the first JavaScript library specifically made for Bitcoin Cash. It supports all major Bitcoin Cash uses cases right out of the box, keeping up-to-date with the latest network upgrades. This library can be used - and is thoroughly tested - both in the back-end (Node.js) and the front-end (web browsers).
        </p>
        <p>
          BitcoinCash.js is a fork from <a href="https://github.com/bitpay/bitcore-lib/" target="_blank" rel="noopener noreferrer">bitcore-lib</a>, which is an extremely easy-to-use and well-tested JavaScript library for Bitcoin developed by Bitpay, Inc. However, as consensus rules between BTC and BCH become more and more incompatible, BitcoinCash.js will not add support for functionality specific to BTC, such as SegWit or the bech32 address format, and will continue to support all Bitcoin Cash uses cases as first-class citizens.
        </p>
      </div>
    );
  }
}

export default About;
