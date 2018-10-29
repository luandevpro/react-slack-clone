import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { pick } from "lodash";
import { Provider } from "./context";
import { reslog } from "./reducers";
import { auth } from "./firebase";

class AppContext extends Component {
	constructor(props) {
		super(props);
		this.state = {
			loadingButton: false,
			errorResLog: null,
			userCurrent: [],
			dispatchResLog: action =>
				this.setState(state => reslog(state, action)),
		};
	}
	componentDidMount() {
		auth.onAuthStateChanged(user => {
			if (user) {
				this.setState({
					userCurrent: pick(user, ["displayName", "photoURL", "email"]),
				});
			}
		});
	}
	render() {
		return <Provider value={this.state}>{this.props.children}</Provider>;
	}
}

export default withRouter(AppContext);
