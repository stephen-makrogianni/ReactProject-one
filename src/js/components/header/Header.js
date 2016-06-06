import React from 'react';

import Title from './Title';

export default class Header extends React.Component{
	// constructor(){
	// 	super();
	// 	this.name = 'Stephen';
	// }
	// greeting(){
	// 	var foo = 'World';
	// 	return foo;
	// }
	render(){
		// const heading = 'Hello ';
		// <h1>{heading + this.greeting() + ' from ' + this.name}</h1>
		return(
			<Title />
		);
	}
} 