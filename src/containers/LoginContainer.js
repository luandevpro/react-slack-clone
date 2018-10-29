import React, { Component } from "react";
import { AuthorContext } from "../context";
import Login from "../components/Auth/Login";
import { auth } from "../firebase";

export default class LoginContainer extends Component {
	static contextType = AuthorContext;
	componentDidMount() {
		auth.onAuthStateChanged(user => {
			if (user) {
				this.props.history.push("/");
			}
		});
	}
	render() {
		var { loadingButton, errorResLog, dispatchResLog } = this.context;
		return (
			<Login
				loading={loadingButton}
				error={errorResLog}
				dispatchResLog={dispatchResLog}
				{...this.props}
			/>
		);
	}
}
