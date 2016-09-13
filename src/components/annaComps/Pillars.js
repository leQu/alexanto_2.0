import React, { Component } from 'react';

export default class Pillars extends Component {
	render(){
    	return(
      		<div className='pillars'>
        		<section>
          			<img src="/build/css/images/legal.png"></img>
          			<h1>Legal</h1>
          			<hr/>
          			<p>
          				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
          				incididunt utsa commodo consequat.
          			</p>
        		</section>
        		<section>
          			<img src="/build/css/images/compli.png"></img>
          			<h1>Compliance</h1>
          			<hr/>
          			<p>
          				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
          				incididunt ut labore et dolore magna aliqua. Ut enim
          			</p>
        		</section>
        		<section>
          			<img src="/build/css/images/manag.png"></img>
          			<h1>Management</h1>
          			<hr/>
          			<p>
          				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
          				incididunt ut labore et dolore magna aliqua. 
          			</p>
        		</section>
      		</div>
    	)
  	}
}