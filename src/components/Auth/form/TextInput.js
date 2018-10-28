import React from "react";
import { Form } from "semantic-ui-react";
import { FiAlertCircle } from "react-icons/fi";
import { ErrorMessage } from "formik";
import styled from "styled-components";

export default props => (
	<TextInputWrapper>
		<Form.Input
			fluid
			icon={props.icon}
			iconPosition="left"
			type={props.type}
			placeholder={props.placeholder}
			{...props.field}
		/>
		<ErrorMessage
			name={props.field.name}
			render={msg => (
				<ErrorWrapper>
					<FiAlertCircleWrapper />
					{msg}
				</ErrorWrapper>
			)}
		/>
	</TextInputWrapper>
);

export const TextInputWrapper = styled.div`
	position: relative;
	margin-bottom: 25px;
`;
export const ErrorWrapper = styled.div`
	color: red;
	position: absolute;
	margin-top: 2px;
	display: flex;
`;

export const FiAlertCircleWrapper = styled(FiAlertCircle)`
	margin-top: 2px;
	margin-right: 4px;
`;
