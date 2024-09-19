import React from "react";
import { StoreProvider } from "./store";
import { Display } from "./components/display";
import { Form } from "./components/form";

export const App = () => {
	return (
		<StoreProvider>
			<div>
				<Display />
				<Form />
			</div>
		</StoreProvider>
	);
};
