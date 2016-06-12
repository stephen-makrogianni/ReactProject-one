import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, hashHistory } from "react-router";

import Archives from "./components/pages/Archives";
import Featured from "./components/pages/Featured";
import Layout from "./components/pages/Layout";
import Settings from "./components/pages/Settings";

const app = document.getElementById('app');

ReactDOM.render(
	<Router history={hashHistory}>
		<Route path='/' component={Layout}>
			<IndexRoute component={Featured}></IndexRoute>
			<Route path='archives(/:article)' component={Archives}></Route>
			<Route path='settings' component={Settings}></Route>
		</Route>
	</Router>,
	 app
);

