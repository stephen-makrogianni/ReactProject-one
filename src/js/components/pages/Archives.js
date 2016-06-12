import React from "react";

export default class Archives extends React.Component{
	constructor(){
		super();
	}

	changeTitle(val){
		this.setState({title: val});
	}

	childArticle(){
		if(this.props.params.article){
			return ' - ' + this.props.params.article;
		}
	}

	render(){
		const params = this.props.params;
		const query = this.props.location.query;

		return(
			<div>
				<h1>Archives{this.childArticle()}</h1>
			</div>
		);
	}
} 