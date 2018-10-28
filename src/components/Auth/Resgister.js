import React, { Component } from "react";
import { Formik } from "formik";
import styled from "styled-components";
import { Grid, Header, Icon } from "semantic-ui-react";
import FormField from "./form/FormField";
import validation from "./form/validation";

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
	handleSubmit = value => {
		alert(JSON.stringify(value, null, 2));
	};
	render() {
		var { username, email, password, passwordconfirm } = this.state;
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
							render={props => <FormField {...props} />}
							validationSchema={validation}
						/>
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
