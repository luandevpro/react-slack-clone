import React, { Component } from "react";
import { Provider } from "./context";
import { display } from "./reducers";

export default class AppContext extends Component {
	constructor(props) {
		super(props);
		this.state = {
			display: false,
			dispatchDisplay: action =>
				this.setState(state => display(state, action)),
		};
	}
	render() {
		return <Provider value={this.state}>{this.props.children}</Provider>;
	}
}
