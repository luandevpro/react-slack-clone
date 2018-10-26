import React, { Component } from "react";
import ReactDOM from "react-dom";
import { map } from "lodash";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./index.css";
import "semantic-ui-css/semantic.min.css";
import routes from "./routes";

class Index extends Component {
	showRoutes = routes => {
		var result = null;
		if (routes.length > 0) {
			result = map(routes, (route, index) => {
				return (
					<Route
						key={index}
						exact={route.exact}
						component={route.main}
						path={route.path}
					/>
				);
			});
		}
		return result;
	};
	render() {
		return (
			<Router>
				<div>
					<Switch>{this.showRoutes(routes)}</Switch>
				</div>
			</Router>
		);
	}
}
ReactDOM.render(<Index />, document.getElementById("root"));
