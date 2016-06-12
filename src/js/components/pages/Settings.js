import React from "react";

export default class Settings extends React.Component{
	constructor(){
		super();
	}

	changeTitle(val){
		this.setState({title: val});
	}

	render(){

		return(
			<div>
				<h1>Settings</h1>
			</div>
		);
	}
} 