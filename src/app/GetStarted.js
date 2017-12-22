import React, { Component } from 'react';

class GetStarted extends Component {
  render() {
    return (
      <div id="GetStarted" className="GetStarted">
        <h1>Get Started</h1>
        <h2>Install via NPM:</h2>
        <pre className="prettyprint">
          <code className="language-bsh">
            $ npm install --save bitcoincashjs
          </code>
        </pre>

        <h2>Or using Bower:</h2>
        <pre className="prettyprint">
          <code className="language-bsh">
            $ bower install bitcoincashjs
          </code>
        </pre>

        <h2>Or add a script to your HTML:</h2>
        <pre className="prettyprint">
          <code className="language-html">
            {'<script src="https://cdn.rawgit.com/bitcoincashjs/bitcoincashjs/master/build/bitcoincashjs-0.1.0.min.js" /></script>'}
          </code>
        </pre>
      </div>
    );
  }
}

export default GetStarted;
