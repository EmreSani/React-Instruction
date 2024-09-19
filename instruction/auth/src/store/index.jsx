import { createContext, useContext, useReducer } from "react";
import { messageReducer } from "./message/reducer";
import { messageState } from "./message/initial-state";

// Bos bir merkezi state olusturuldu
const StoreContext = createContext();

export const useStore = () => useContext(StoreContext);

export const StoreProvider = ({ children }) => {
	const [stateMessage, dispatchMessage] = useReducer(
		messageReducer,
		messageState
	);

	return (
		<StoreContext.Provider value={{ stateMessage, dispatchMessage }}>
			{children}
		</StoreContext.Provider>
	);
};
