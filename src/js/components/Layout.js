import React from 'react';

import Header from './header/Header';
import Footer from './Footer';

export default class Layout extends React.Component{
	constructor(){
		super();
		// this.name = 'Stephen';
	}
	render(){
		return(
			<div>
			<Header/>
			<p>It's working</p>
			<Footer/>
			</div>
		);
	}
} 