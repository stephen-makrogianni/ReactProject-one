import React from 'react';

import Header from '../header/Header';
import Footer from '../Footer';

export default class Featured extends React.Component{
	constructor(){
		super();
	}

	changeTitle(val){
		this.setState({title: val});
	}

	render(){

		return(
			<div>
			
			<p>Featured</p>
			<Footer/>
			</div>
		);
	}
} 