import React, { Component } from "react";
import { Formik } from "formik";
import { Grid, Header, Icon } from "semantic-ui-react";
import LoginField from "./form/LoginField";
import validateLog from "./form/validateLog";
import { auth } from "../../firebase";
import { ResgisterWrapper } from "./Resgister";
import * as Types from "../../constants/ActionTypes";

export default class Login extends Component {
	constructor(props) {
		super(props);
		this.state = {
			email: "",
			password: "",
		};
	}
	handleSubmit = (value, { resetForm }) => {
		this.props.dispatchResLog({
			type: Types.GET_RESLOG,
			status: "loading",
		});
		auth
			.signInWithEmailAndPassword(value.email, value.password)
			.then(user => {
				this.props.dispatchResLog({
					type: Types.GET_RESLOG,
					status: "notloading1",
				});
				this.props.history.push("/");
			})
			.catch(err => {
				console.log(err);
				this.props.dispatchResLog({
					type: Types.GET_RESLOG,
					payload: err,
					status: "notloading2",
				});
			});
		resetForm({
			email: "",
			password: "",
		});
	};
	render() {
		var { email, password } = this.state;
		var { loading, error, history } = this.props;
		console.log(this.props);
		return (
			<ResgisterWrapper>
				<Grid textAlign="center" verticalAlign="middle">
					<Grid.Column style={{ maxWidth: 450 }}>
						<Header as="h2" icon color="violet" textAlign="center">
							<Icon name="puzzle piece" color="violet" />
							Login for Devchat
						</Header>
						<Formik
							initialValues={{
								email,
								password,
							}}
							onSubmit={this.handleSubmit}
							validationSchema={validateLog}
						>
							{() => (
								<LoginField
									loading={loading}
									error={error}
									history={history}
								/>
							)}
						</Formik>
					</Grid.Column>
				</Grid>
			</ResgisterWrapper>
		);
	}
}
