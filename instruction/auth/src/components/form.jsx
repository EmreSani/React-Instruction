import React from "react";
import { useStore } from "../store";

export const Form = () => {
	const { stateMessage, dispatchMessage } = useStore();

	return (
		<div>
			<input
				type="text"
				value={stateMessage.message}
				onChange={(e) =>
					dispatchMessage({
						type: "SET_MESSAGE",
						payload: e.target.value,
					})
				}
			/>
			<button onClick={() => dispatchMessage({ type: "CLEAR_MESSAGE" })}>
				Clear
			</button>
		</div>
	);
};
