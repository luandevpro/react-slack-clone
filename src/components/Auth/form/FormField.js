import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Segment, Button, Message } from "semantic-ui-react";
import { Form, Field } from "formik";
import TextInput from "./TextInput";

export default class FormField extends Component {
	render() {
		return (
			<Form>
				<Segment stacked>
					<Field
						name="username"
						id="username"
						icon="user"
						type="text"
						placeholder="Enter your username"
						component={TextInput}
					/>
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
					<Field
						name="passwordconfirm"
						id="passwordconfirm"
						icon="repeat"
						type="password"
						placeholder="Enter your confirmpassword"
						component={TextInput}
					/>
					<Button fluid color="orange" type="submit">
						Submit
					</Button>
					<Message>
						Already a user ? <Link to="/login">Login</Link>
					</Message>
				</Segment>
			</Form>
		);
	}
}
