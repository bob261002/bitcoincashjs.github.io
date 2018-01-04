import React from 'react';
import Sidebar from 'react-sidebar';
import GitHubForkRibbon from 'react-github-fork-ribbon';
import 'prismjs';
import 'prismjs/themes/prism-tomorrow.css';
import 'bootstrap/dist/css/bootstrap.css';
import './fonts.css';
import './App.css';
import Header from './app/Header';
import Examples from './app/Examples';

const mql = window.matchMedia(`(min-width: 768px)`);

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      mql: mql,
      docked: props.docked,
      open: props.open
    }

    this.mediaQueryChanged = this.mediaQueryChanged.bind(this);
    this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
  }

  onSetSidebarOpen(open) {
    this.setState({sidebarOpen: open});
  }

  componentWillMount() {
    mql.addListener(this.mediaQueryChanged);
    this.setState({mql: mql, sidebarDocked: mql.matches});
  }

  componentWillUnmount() {
    this.state.mql.removeListener(this.mediaQueryChanged);
  }

  mediaQueryChanged() {
    this.setState({sidebarDocked: this.state.mql.matches});
  }

  render() {
    var sidebarContent =
      <b>
        <nav id="sidebar">
              <div className="sidebar-header">
                  <h4><a href="https://github.com/bitcoincashjs/bitcoincashjs">Bitcoin<span>Cash</span>.js</a></h4>
                  <p><em>v0.1.7</em></p>
              </div>
              <hr />
              <ul className="components">
                  <li className="active"><a href="#About">About</a></li>
                  <li><a href="#GetStarted">Get Started</a></li>
                  <li><a href="#Features">Features</a></li>
                  <li><a href="#Examples">Examples</a></li>
                  <li><a href="#Documentation">Documentation</a></li>
                  <li><a href="#Contributing">Contributing</a></li>
              </ul>
          </nav>
      </b>;

    return (
      <Sidebar sidebar={sidebarContent}
               open={this.state.sidebarOpen}
               docked={this.state.sidebarDocked}
               onSetOpen={this.onSetSidebarOpen}>
        <b>
          <div className="App">
            <GitHubForkRibbon href="https://github.com/bitcoincashjs/bitcoincashjs"
                              color="black"
                              target="_blank"
                              position="right">
              Fork me on GitHub
            </GitHubForkRibbon>
            <div className="container">
              <div className="row justify-content-lg-center">
                <div className="col-lg-10 header">
                  <Header />              
                </div>
              </div>
              <div className="row justify-content-lg-center">
                <div className="col-lg-8 section first-section">
                  <div id="About" className="About">
                    <h1>About Bitcoin Cash</h1>
                    <p><a href="https://bitcoincash.org/" target="_blank" rel="noopener noreferrer">Bitcoin Cash</a> is peer-to-peer electronic cash for the Internet. It is a fully decentralized network without a central bank and requires no trusted third-parties to operate. Bitcoin Cash is the continuation of the Bitcoin project, upgraded with consensus rules that allow it to grow and scale.</p>
                    <h1>About Bitcoin<span>Cash</span>.js:</h1>
                    <p><a href="https://github.com/bitcoincashjs/bitcoincashjs">BitcoinCash.js</a> is the first JavaScript library specifically made for Bitcoin Cash. It supports all major Bitcoin Cash uses cases right out of the box, keeping up-to-date with the latest network upgrades. This library can be used - and is thoroughly tested - both in the back-end (Node.js) and the front-end (web browsers).</p>
                    <p>BitcoinCash.js is a fork from <a href="https://github.com/bitpay/bitcore-lib/" target="_blank" rel="noopener noreferrer">bitcore-lib</a>, which is an extremely easy-to-use and well-tested JavaScript library for Bitcoin developed by Bitpay, Inc. However, as consensus rules between BTC and BCH become more and more incompatible, BitcoinCash.js will not add support for functionality specific to BTC, such as SegWit or the bech32 address format, and will continue to support all Bitcoin Cash uses cases right out of the box.</p>
                  </div>
                </div>
              </div>
              <div className="row justify-content-lg-center">
                <div className="col-lg-8 section">
                  <div id="GetStarted" className="GetStarted">
                    <h1>Get Started</h1>
                    <h2>Using NPM:</h2>
                    <pre>
                      <code className="language-bsh">
                        $ npm install --save bitcoincashjs
                      </code>
                    </pre>

                    <h2>Using Bower:</h2>
                    <pre>
                      <code className="language-bsh">
                        $ bower install bitcoincashjs
                      </code>
                    </pre>

                    <h2>Manually:</h2>
                    <p>You may also download the distribution file manually and place it within your third-party scripts directory: <a href="https://cdn.rawgit.com/bitcoincashjs/bitcoincashjs/master/dist/bitcoincashjs.0.1.7.min.js" target="_blank" rel="noopener noreferrer">dist/bitcoincashjs.0.1.7.min.js</a>.</p>
                    <pre>
                      <code className="language-html">
                        {
                          '<script src="https://cdn.rawgit.com/bitcoincashjs/bitcoincashjs/master/dist/bitcoincashjs.0.1.7.min.js" /></script>'
                        }
                      </code>
                    </pre>
                  </div>
                </div>
              </div>
              <div className="row justify-content-lg-center">
                <div className="col-lg-8 section">
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
                </div>
              </div>
              <div className="row justify-content-lg-center">
                <div className="col-lg-8 section">
                  <Examples />
                </div>
              </div>
              <div className="row justify-content-lg-center">
                <div className="col-lg-8 section">
                  <div id="Documentation" className="Documentation">
                    <h1>Documentation</h1>
                    <p>You can find more comprehensive documentation on BitcoinCash.js in our Github <a href="https://github.com/bitcoincashjs/bitcoincashjs" target="_blank" rel="noopener noreferrer">repository</a>.</p>
                  </div>
                </div>
              </div>
              <div className="row justify-content-lg-center">
                <div className="col-lg-8 section last-section">
                <div id="Contributing" className="Contributing">
                  <h1>Contributing</h1>
                  <p>
                    This is an open-source project; any form of contribution is welcome. Feel free to create an issue in case you would like to share ideas for improvement, or would like to report a bug. Also, please send pull requests for bug fixes or code optimization. For more information on how to contribute, please refer to our <a href="https://github.com/bitcoincashjs/bitcoincashjs/blob/master/CONTRIBUTING.md" target="_blank" rel="noopener noreferrer">CONTRIBUTING</a> file.
                  </p>
                </div>
                </div>
              </div>
              <hr />
              <div className="row justify-content-lg-center">
                <div className="col-lg-8 footer">
                  <div className="Footer">
                    <h2>Bitcoin Cash - Peer-to-Peer Electronic Cash</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </b>
      </Sidebar>
    );
  }
};

export default App;
