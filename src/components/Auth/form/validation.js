import * as Yup from "yup";

const validation = () =>
	Yup.object().shape({
		username: Yup.string().required("Username is required"),
		email: Yup.string()
			.email("Email not valid")
			.required("Email is Required"),
		password: Yup.string()
			.min(9, "Password must be at least 9")
			.max(24, "Password too long")
			.required("Password is Required"),
		passwordconfirm: Yup.string()
			.oneOf([Yup.ref("password"), null], "Passwords don't match")
			.required("Password confirm is required"),
	});

export default validation;
