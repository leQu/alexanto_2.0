import React, { Component } from 'react';

export default class App extends Component {

	goToAnna(who){
		console.log('Hoppa till who')
		//this.history.pushState(null, '/'+who);
	}

  render() {
    return (
    	<div>
      	<h1>Hello, wurld</h1>
      	<button onClick={this.goToAnna.bind(this, 'anna')}>ANNA</button>
      </div>
    );
  }
}

//<button className="github" onClick={this.authenticate.bind(this, 'github')}>Log In with Github</button>
