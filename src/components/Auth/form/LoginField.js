import React, { Component, memo } from "react";
import { Link } from "react-router-dom";
import { Segment, Button, Message } from "semantic-ui-react";
import { Form, Field } from "formik";
import TextInput from "./TextInput";

class LoginField extends Component {
	render() {
		console.log(this.props);
		return (
			<Form>
				<Segment stacked>
					{this.props.error && (
						<Message color="violet">{this.props.error}</Message>
					)}
					<Field
						name="email"
						id="email"
						icon="mail"
						type="email"
						placeholder="Enter your email"
						component={TextInput}
					/>
					<Field
						name="password"
						id="password"
						icon="lock"
						type="password"
						placeholder="Enter your password"
						component={TextInput}
					/>
					<Button
						loading={this.props.loading}
						fluid
						color="violet"
						type="submit"
					>
						Submit
					</Button>
					<Message>
						Don't have a ccount ? <Link to="/resgister">Resgister</Link>
					</Message>
				</Segment>
			</Form>
		);
	}
}

export default memo(LoginField);
