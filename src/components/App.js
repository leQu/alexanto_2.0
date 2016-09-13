import React, { Component } from 'react';
import { browserHistory } from 'react-router';

export default class App extends Component {

	jumpToTarget(who){
		console.log('Hoppa till '+who)
		browserHistory.push('/'+who);
	}

  render() {
    return (
    	<div className="container">
        <section className="jumpTarget">
          <button onClick={this.jumpToTarget.bind(this, 'anna')}>Anna Wilson Lantz</button>
          <button onClick={this.jumpToTarget.bind(this, 'peter')}>Peter Lantz</button>
        </section>
        <h1>alexanto</h1>
        <section className="jumpTarget">
          <button onClick={this.jumpToTarget.bind(this, 'alexander')}>Alexander Lantz</button>
          <button onClick={this.jumpToTarget.bind(this, 'antonia')}>Antonia Lantz</button>
        </section>
      </div>
    );
  }
}

//<button className="github" onClick={this.authenticate.bind(this, 'github')}>Log In with Github</button>
