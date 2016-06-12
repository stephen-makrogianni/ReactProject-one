import React from "react";

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
				<h1>Featured</h1>
			</div>
		);
	}
} 