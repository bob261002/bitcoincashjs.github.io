import React from 'react';
import Sidebar from 'react-sidebar';
import GitHubForkRibbon from 'react-github-fork-ribbon';
import 'bootstrap/dist/css/bootstrap.css';
import './fonts.css';
import './App.css';
import Header from './app/Header';
import GetStarted from './app/GetStarted';
import Examples from './app/Examples';
import Features from './app/Features';
import Documentation from './app/Documentation';
import Contributing from './app/Contributing';
import Contributors from './app/Contributors';
import Footer from './app/Footer';

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
              <div class="sidebar-header">
                  <h4><a href="https://github.com/bitcoincashjs/bitcoincashjs">Bitcoin<span>Cash</span>.js</a></h4>
                  <p><em>v0.1.0</em></p>
              </div>
              <hr />
              <ul class="components">
                  <li class="active"><a href="#GetStarted">Get Started</a></li>
                  <li><a href="#Features">Features</a></li>
                  <li><a href="#Examples">Examples</a></li>
                  <li><a href="#Documentation">Documentation</a></li>
                  <li><a href="#Contributing">Contributing</a></li>
                  <li><a href="#Contributors">Contributors</a></li>
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
                  <GetStarted />
                </div>
              </div>
              <div className="row justify-content-lg-center">
                <div className="col-lg-8 section">
                  <Features />
                </div>
              </div>
              <div className="row justify-content-lg-center">
                <div className="col-lg-8 section">
                  <Examples />
                </div>
              </div>
              <div className="row justify-content-lg-center">
                <div className="col-lg-8 section">
                  <Documentation />
                </div>
              </div>
              <div className="row justify-content-lg-center">
                <div className="col-lg-8 section">
                  <Contributing />
                </div>
              </div>
              <div className="row justify-content-lg-center">
                <div className="col-lg-8 section last-section">
                  <Contributors />
                </div>
              </div>
              <hr />
              <div className="row justify-content-lg-center">
                <div className="col-lg-8 footer">
                  <Footer />
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
