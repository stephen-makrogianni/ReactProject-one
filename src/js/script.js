import React from "react";
import ReactDOM from "react-dom";
import {Router, Route, IndexRoute, hashHistory} from 'react-router';


import Layout from "./components/pages/Layout";
import Archives from "./components/pages/Archives";
import Settings from "./components/pages/Settings";
import Featured from "./components/pages/Featured";


const app = document.getElementById('app');
ReactDOM.render(
	<Router history={hashHistory}>
		<Route path='/' component={Layout}></Route>
		<IndexRoute component={Featured}></IndexRoute>
		<Route path='archives' component={Archives}></Route>
		<Route path='settings' component={Settings}></Route>
	</Router>,
	 app
);

