import React, { Component } from 'react';

import Pillars from './annaComps/Pillars'
import Contact from './annaComps/Contact'

export default class Anna extends Component {

	wejustclicked(whatDiv, whatCont){
		var mainContainer = document.getElementById(whatCont);
		var elementLocation = document.getElementById(whatDiv).offsetTop;
        var height = document.getElementById(whatDiv).offsetHeight;
        console.log(window.innerHeight);
        console.log(height)

		mainContainer.classList.add('in-transition');
		mainContainer.style.WebkitTransform = "translate(0, "+(window.pageYOffset-(height+elementLocation-window.innerHeight))+"px)";
		mainContainer.style.MozTransform = "translate(0, "+(window.pageYOffset-(height+elementLocation-window.innerHeight))+"px)";
		mainContainer.style.transform = "translate(0, "+(window.pageYOffset-(height+elementLocation-window.innerHeight))+"px)";

		var myTimeout = setTimeout(function(){
			mainContainer.classList.remove('in-transition');
			mainContainer.style.transform = "";
			window.scrollTo(0, elementLocation);
		}, 600);
	}

    goToCV(event){
        event.preventDefault();
        console.log(event);
        //href="https://www.linkedin.com/in/anna-vilson-lantz-92aa28?authType=NAME_SEARCH&authToken=nnec&locale=sv_SE&trk=tyah&trkInfo=clickedVertical%3Amynetwork%2CentityType%3AentityHistoryName%2CclickedEntityId%3Amynetwork_2544946%2Cidx%3A0"
    }

  render() {
    return (
    	<div className="annaContainer" id="annaCont">
            <div className="target-nav">
                <div id="home-logo">IMG</div>
            </div>
    		<section className="annaSec annaTop">
    			<section className="anna-left">
    				<h1>Anna Vilson Lantz</h1>
    				<ul>
                        <li><a onClick={this.goToCV}>CV</a></li>
                        <li><a onClick={this.wejustclicked.bind(this, 'contactAnna','annaCont')}>Contact</a></li>            
                    </ul>
    				<p>Anna Vilson Lantz, lawyer and senior consultant. She provides compliance 
                    and risk services to banks and other financial institutions (securities services, 
                    AML/CTF, credits, Code of conduct, GL44, Swedish FSA issues and authorizations etc.). 
                    Anna also has long experience in change management, training and communication and 
                    is a skilful negotiator and customer relations manager.</p>
    			</section>
    			<section className="anna-right">
    				<img src="/build/css/images/manag.png"/>
    			</section>
    		</section>
    		<section className="annaSec annaMid">
                <Pillars />
            </section>
			<section className="annaSec annaBot" id="contactAnna">
                <Contact />
            </section>
   		</div>
    );
  }
}