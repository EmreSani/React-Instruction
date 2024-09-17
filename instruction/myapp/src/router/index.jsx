import { createBrowserRouter, RouterProvider } from "react-router-dom";

import HelloWorld from "../components/01-hello/hello-world";
import HelloReact from "../components/01-hello/hello-react";
import { UserLayout } from "../layouts/user-layout";
import { Jsx1 } from "../components/02-jsx/jsx1";
import { Jsx2 } from "../components/02-jsx/jsx2";

const router = createBrowserRouter([
	{
		path: "/",
		element: <UserLayout />,
		children: [
			{
				path: "hello-react",
				element: <HelloReact />,
			},
			{
				path: "hello-world",
				element: <HelloWorld />,
			},
			{
				path: "jsx",
				children: [
					{
						path: "1",
						element: <Jsx1 />,
					},
					{
						path: "2",
						element: <Jsx2 />,
					},
				],
			},
		],
	}
]);

export const AppRouter = () => {
	return <RouterProvider router={router} />;
};
