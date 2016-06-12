import React from "react";

import Title from "./Title";

export default class Header extends React.Component{
	// constructor(){
	// 	super();
	// 	this.name = 'Stephen';
	// }
	// greeting(){
	// 	var foo = 'World';
	// 	return foo;
	// }

	handleChange(e){
		var title = e.target.value;
		this.props.changeTitle(title);
	}


	render(){
		// const heading = 'Hello ';
		// <h1>{heading + this.greeting() + ' from ' + this.name}</h1>


		console.log(this.props);
		return(
			<div>
				<Title title={this.props.title} />
				<input value={this.props.title} onChange={this.handleChange.bind(this)}/>
				
			</div>
		);
	}
} 