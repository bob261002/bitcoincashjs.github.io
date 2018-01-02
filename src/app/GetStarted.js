import React, { Component } from 'react';

class GetStarted extends Component {
  render() {
    return (
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
        <p>You may also download the distribution file manually and place it within your third-party scripts directory: <a href="https://cdn.rawgit.com/bitcoincashjs/bitcoincashjs/master/dist/bitcoincashjs.0.1.2.min.js" target="_blank" rel="noopener noreferrer">dist/bitcoincashjs.0.1.2.min.js</a>.</p>
        <pre>
          <code className="language-html">
            {
              '<script src="https://cdn.rawgit.com/bitcoincashjs/bitcoincashjs/master/dist/bitcoincashjs.0.1.2.min.js" /></script>'
            }
          </code>
        </pre>
      </div>
    );
  }
}

export default GetStarted;
