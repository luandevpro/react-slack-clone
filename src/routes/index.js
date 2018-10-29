import React, { Suspense, lazy } from "react";

const App = lazy(() => import("../components/App"));
const LoginContainer = lazy(() => import("../containers/LoginContainer"));
const ResgisterContainer = lazy(() =>
	import("../containers/ResgisterContainer")
);

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
		main: ({ history }) => (
			<Suspense fallback={<div>loading...</div>}>
				<LoginContainer history={history} />
			</Suspense>
		),
	},
	{
		path: "/resgister",
		exact: false,
		main: ({ history }) => (
			<Suspense fallback={<div>loading...</div>}>
				<ResgisterContainer history={history} />
			</Suspense>
		),
	},
];

export default routes;
