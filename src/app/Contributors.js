import React, { Component } from 'react';

class Contributors extends Component {
  render() {
    return (
      <div id="Contributors" className="Contributors">
        <h1>Contributors</h1>
        <p>Based on the <a href="https://github.com/bitpay/bitcore-lib/">Bitcore Library</a> released under the MIT license by Bitpay Inc.</p>
        <p>Forked from the <a href="https://github.com/bitpay/bitcore-lib/releases/tag/v0.14.0-cash">v0.14.0</a> Bitcoin Cash special release based on the work by <a href="https://github.com/matiu">Matias Alejo Garcia</a> in the <em>cash</em> development branch.</p>
      </div>
    );
  }
}

export default Contributors;
