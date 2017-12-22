import React, { Component } from 'react';

class Features extends Component {
  render() {
    return (
      <div id="Features" className="Features">
        <h1>Features</h1>
        <ul>
          <li><strong><em>Bitcoin Cash Ready</em></strong> - Full support for Bitcoin Cash. Always up-to-date with the latest network upgrades.</li>
          <li><strong><em>Powerful</em></strong> - Support for advanced features such as multi-sig and message verification.</li>
          <li><strong><em>Easy</em></strong> - Clean, concise interfaces. Easy to integrate into your application. MIT licensed.</li>
          <li><strong><em>Compatible</em></strong> - Works on Node.js and all modern browsers.</li>
          <li><strong><em>Tested</em></strong> - Coverage &gt; 95%, third-party integration tests.</li>
          <li><strong><em>Proven</em></strong> - Based on the amazing <a href="https://github.com/bitpay/bitcore-lib/">bitcore-lib</a>, developed and used in production by Bitpay and many others.</li>
          <li><strong><em>Standardized</em></strong> - Node community coding style, Node's stdlib and Buffers.</li>
          <li><strong><em>Experiment-friendly</em></strong> - Bitcoin Cash mainnet and testnet support.</li>
        </ul>
      </div>
    );
  }
}

export default Features;
