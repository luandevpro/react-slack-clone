import React from "react";
import App from "../components/App";
import Login from "../components/Auth/Login";
import Resgister from "../components/Auth/Resgister";

const routes = [
	{
		path: "/",
		exact: true,
		main: () => <App />,
	},
	{
		path: "/login",
		exact: false,
		main: () => <Login />,
	},
	{
		path: "/resgister",
		exact: false,
		main: () => <Resgister />,
	},
];

export default routes;
