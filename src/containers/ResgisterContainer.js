import React, { Component } from "react";
import { AuthorContext } from "../context";
import Resgister from "../components/Auth/Resgister";
import { auth } from "../firebase";

export default class ResgisterContainer extends Component {
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
			<Resgister
				loading={loadingButton}
				error={errorResLog}
				dispatchResLog={dispatchResLog}
			/>
		);
	}
}
