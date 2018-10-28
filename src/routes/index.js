import React, { Suspense, lazy } from "react";

const App = lazy(() => import("../components/App"));
const Login = lazy(() => import("../components/Auth/Login"));
const Resgister = lazy(() => import("../components/Auth/Resgister"));

const routes = [
	{
		path: "/",
		exact: true,
		main: () => (
			<Suspense fallback={<div>loading...</div>}>
				<App />
			</Suspense>
		),
	},
	{
		path: "/login",
		exact: false,
		main: () => (
			<Suspense fallback={<div>loading...</div>}>
				<Login />
			</Suspense>
		),
	},
	{
		path: "/resgister",
		exact: false,
		main: () => (
			<Suspense fallback={<div>loading...</div>}>
				<Resgister />
			</Suspense>
		),
	},
];

export default routes;
