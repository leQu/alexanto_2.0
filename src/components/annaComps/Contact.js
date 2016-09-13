import React, { Component } from 'react';

export default class Contact extends Component {
  	render() {
		return(
			<div className="contact">
				<div className="contactInfo">	
        			<h1>Contact</h1>
        			<h1>Information</h1>
				</div>
        		<hr/>
        		<div className="contactContent">	
        			<h2>Phone: +46 72 354 30 35</h2>
        			<h2>Email: anna@alexanto.se</h2>
        		</div>
        		<h3>Alexanto © 2016 All Rights Reserved</h3>
      		</div>
    	);
	}
}