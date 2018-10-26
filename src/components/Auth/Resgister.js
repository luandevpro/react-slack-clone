import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import {
	Grid,
	Header,
	Icon,
	Form,
	Segment,
	Button,
	Message,
} from "semantic-ui-react";

export default class Resgister extends Component {
	render() {
		return (
			<ResgisterWrapper>
				<Grid textAlign="center" verticalAlign="middle">
					<Grid.Column style={{ maxWidth: 450 }}>
						<Header as="h2" icon color="orange" textAlign="center">
							<Icon name="puzzle piece" color="orange" />
							Resgister for Devchat
						</Header>
						<Form size="large">
							<Segment stacked>
								<Form.Input
									fluid
									icon="user"
									placeholder="Enter your username"
									name="username"
									type="text"
									iconPosition="left"
								/>
								<Form.Input
									fluid
									icon="mail"
									placeholder="Enter your email"
									name="email"
									type="email"
									iconPosition="left"
								/>
								<Form.Input
									fluid
									icon="lock"
									placeholder="Enter your password"
									name="password"
									type="password"
									iconPosition="left"
								/>
								<Form.Input
									fluid
									icon="repeat"
									placeholder="Enter your passwordConfirm "
									name="passwordConfirm"
									type="password"
									iconPosition="left"
								/>
								<Button fluid color="orange">
									Submit
								</Button>
								<Message>
									Already a user ? <Link to="/login">Login</Link>
								</Message>
							</Segment>
						</Form>
					</Grid.Column>
				</Grid>
			</ResgisterWrapper>
		);
	}
}

export const ResgisterWrapper = styled.div`
	margin-top: 60px;
`;
