import React from 'react';
import { Link } from 'react-router';

import Header from '../header/Header';
import Footer from '../Footer';

export default class Layout extends React.Component{
	constructor(){
		// Always call super when creating the constructor
		super();

		// States are only used on the component they are decleared in, it will never be used for any other componant.
		this.state = {name: 'Stephen', title: 'Welcome'};

		// Props are injected into other components
	}

	changeTitle(val){
		this.setState({title: val});
	}

	render(){

		// Example of state being changed.
			// setTimeout(()=> {
			// 	this.setState({name: 'BMak'});
			// }, 1500);

		// var title = 'Main title';

		return(
			<div>
			{/*this.state.name*/}
			{/*<Header title={title} />*/}
			<Header changeTitle={this.changeTitle.bind(this)} title={this.state.title} />
			{this.props.children}
			<Link to='archives'>Archives</Link>
			<Link to='settings'>settings</Link>

			<p>It's working</p>
			<Footer/>
			</div>
		);
	}
} 