import React, { Component } from 'react';
import forkMeOnGithub from './fork-me-on-github.png';
import './App.css';
import './fonts/index.css';
import 'bootstrap/dist/css/bootstrap.css';
import $ from 'jquery';

class App extends Component {
  componentDidMount() {
    typeHeader('.header h1');
  }
  render() {
    return (
      <div className="App">
      
        <a id="fork-me-on-github" href="https://github.com/bitcoincashjs/bitcoincashjs" target="_blank" rel="noopener">
          <img src={forkMeOnGithub} alt="Fork me on Github" />
        </a>
      
        <div className="container">
          <div className="row justify-content-lg-center">
            <div className="col-lg-10 header">
              <div className="jumbotron jumbotron-fluid">
                <div className="container">
                  <h1 className="display"></h1>
                  <p className="lead">
                    The clean, readable, proven JavaScript library for <strong>Bitcoin Cash</strong>. <br />
                    Based on the amazing <em>BitcoinJS</em>.
                  </p>
                  <div className="npm-stats">
                    <img src="https://nodei.co/npm/bitcoinjs-lib.png" alt="Npm Stats" />
                  </div>
                  <div className="badges">
                    <img src="https://travis-ci.org/bitcoinjs/bitcoinjs-lib.png?branch=master" alt="Build Status" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row justify-content-lg-center">
            <div className="col-lg-8 section first-section">
              <h1>Get Started</h1>
              <h2>Install via NPM:</h2>
              <pre className="prettyprint">
                <code className="language-bsh">
                  $ npm install bitcoincashjs
                </code>
              </pre>
              <h2>Compile for browser:</h2>
              <pre className="prettyprint">
                <code className="language-bsh">
                  $ npm install bitcoincashjs browserify uglify-js<br />
                  $ browserify -r bitcoincashjs -s bitcoin | uglifyjs > bitcoinjs.min.js
                </code>
              </pre>
            </div>
          </div>

          <div className="row justify-content-lg-center">
            <div className="col-lg-8 section">
              <h1>Examples</h1>
              <h2>Generating a Bitcoin address:</h2>
              <pre className="prettyprint">
                <code className="language-js">
                  var keyPair = bitcoin.ECPair.makeRandom()<br />
                  <br />
                  // Print your private key (in WIF format)<br />
                  console.log(keyPair.toWIF())<br />
                  // => Kxr9tQED9H44gCmp6HAdmemAzU3n84H3dGkuWTKvE23JgHMW8gct<br />
                  <br />
                  // Print your public key address<br />
                  console.log(keyPair.getAddress())<br />
                  // => 14bZ7YWde4KdRb5YN7GYkToz3EHVCvRxkF<br />
                </code>
              </pre>
            </div>
          </div>
          
          <div className="row justify-content-lg-center">
            <div className="col-lg-8 section">
              <h1>Features</h1>
              <ul>
                <li>Clean - Pure JavaScript, concise code, easy to read.</li>
                <li>Tested - <strong>Coverage &gt; 95%</strong>, third-party integration tests.</li>
                <li>Careful - Two person approval process for small, focused pull requests.</li>
                <li>Compatible - Works on Node.js and all modern browsers.</li>
                <li>Powerful - Support for advanced features, such as multi-sig, HD Wallets.</li>
                <li>Secure - Strong random number generation, PGP signed releases, trusted developers.
                </li>
                <li>Principled - No support for browsers with crap RNG (IE &lt; 11)</li>
                <li>Standardized - Node community coding style, <a href="http://browserify.org">Browserify</a>, Node's stdlib and Buffers.
                </li>
                <li>Fast - Optimized code, uses <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Typed_arrays">typed arrays</a> instead of byte arrays for performance.
                </li>
                <li>Experiment-friendly - Bitcoin Mainnet and Testnet support.</li>
                <li>Altcoin-ready - Capable of working with bitcoin-derived currencies (such as <a href="https://dogecoin.com">Dogecoin</a>).</li>
              </ul>
            </div>
          </div>

          <div className="row justify-content-lg-center">
            <div className="col-lg-8 section">
              <h1>Documentation</h1>
              <p>We provide <a href="https://github.com/bitcoinjs/bitcoinjs-lib/tree/master/test">extensive code testing as a reference</a> that shows what the code is proven to do. There are no plans for written documentation, but you are welcome to <a href="https://github.com/bitcoinjs/bitcoinjs-lib">contribute some</a>.</p>
            </div>
          </div>

          <div className="row justify-content-lg-center">
            <div className="col-lg-8 section">
              <h1>Contributing</h1>
              <p>We always welcome help on the library. If you want to help build (or fix bugs), fork the repository, create a topic branch (keep it focused, and <strong>ADD TESTS</strong>), make the change, commit to your forked repo, and send a pull request.</p>
            </div>
          </div>

          <div className="row justify-content-lg-center">
            <div className="col-lg-8 section last-section">
              <h1>Contributors</h1>
              <p>
                Stefan Thomas is the inventor and creator of this project. His pioneering work made Bitcoin web wallets possible.
              </p>
              <p>Since then, many developers have joined in to improve the library. <a href="https://github.com/bitcoinjs/bitcoinjs-lib/graphs/contributors">Click here</a> to see the full list.</p>
              <p>Daniel Cousens, Wei Lu, JP Richardson and Kyle Drake led the major refactor of the library from 0.1.3 to 1.0.0.</p>
            </div>
          </div>

          <hr />

          <div className="row justify-content-lg-center">
            <div className="col-lg-8 footer">
              <h2>Bitcoin Cash - Peer-to-Peer Electronic Cash</h2>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function typeHeader(headerSelector) {
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
  const timeouts = [ 101, 148, 102, 131, 129, 165, 175 ];
  const typeLetter = i => {
    if (i < steps.length) {
      $(headerSelector).html(steps[i]);
      setTimeout(typeLetter, timeouts[i % timeouts.length], i + 1);
    }
  }
  typeLetter(0);
}

export default App;
