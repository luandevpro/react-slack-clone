import * as Yup from "yup";

const validation = () =>
	Yup.object().shape({
		email: Yup.string()
			.email("Email not valid")
			.required("Email is Required"),
		password: Yup.string().required("Password is Required"),
	});

export default validation;
