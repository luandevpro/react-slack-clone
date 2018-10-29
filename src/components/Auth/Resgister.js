import React, { Component } from "react";
import { Formik } from "formik";
import styled from "styled-components";
import md5 from "md5";
import { Grid, Header, Icon } from "semantic-ui-react";
import ResgisterField from "./form/ResgisterField";
import validateRes from "./form/validateRes";
import { auth, firestore } from "../../firebase";
import * as Types from "../../constants/ActionTypes";

export default class Resgister extends Component {
	constructor(props) {
		super(props);
		this.state = {
			username: "",
			email: "",
			password: "",
			passwordconfirm: "",
		};
	}
	handleSubmit = (value, { resetForm }) => {
		this.props.dispatchResLog({
			type: Types.GET_RESLOG,
			status: "loading",
		});
		auth
			.createUserWithEmailAndPassword(value.email, value.password)
			.then(createUser => {
				createUser.user
					.updateProfile({
						displayName: value.username,
						photoURL: `https://gravatar.com/${md5(
							createUser.user.email
						)}?d=identicon`,
					})
					.then(() => {
						firestore
							.collection("users")
							.doc(createUser.user.uid)
							.set({
								name: createUser.user.displayName,
								avatar: createUser.user.photoURL,
								email: createUser.user.email,
								uid: createUser.user.uid,
							});
						this.props.dispatchResLog({
							type: Types.GET_RESLOG,
							status: "notloading1",
						});
					})
					.catch(err => console.log(err));
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
			username: "",
			email: "",
			password: "",
			passwordconfirm: "",
		});
	};
	render() {
		var { username, email, password, passwordconfirm } = this.state;
		var { loading, error } = this.props;
		return (
			<ResgisterWrapper>
				<Grid textAlign="center" verticalAlign="middle">
					<Grid.Column style={{ maxWidth: 450 }}>
						<Header as="h2" icon color="orange" textAlign="center">
							<Icon name="puzzle piece" color="orange" />
							Resgister for Devchat
						</Header>
						<Formik
							initialValues={{
								username,
								email,
								password,
								passwordconfirm,
							}}
							onSubmit={this.handleSubmit}
							validationSchema={validateRes}
						>
							{() => <ResgisterField loading={loading} error={error} />}
						</Formik>
					</Grid.Column>
				</Grid>
			</ResgisterWrapper>
		);
	}
}

export const ResgisterWrapper = styled.div`
	margin-top: 60px;
	text-align: center;
`;
