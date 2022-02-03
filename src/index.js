import React from "react";
import ReactDOM from "react-dom";
import { store, persistor } from "./redux/store";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import "./index.css";
import App from "./App";

ReactDOM.render(
	<Provider store={store}>
		<BrowserRouter>
			<PersistGate persistor={persistor}>
				{/* the app should always have access the persistance flow and fire actions to rehydrate the state whenever the app refreshes*/}
				<App />
			</PersistGate>
		</BrowserRouter>
	</Provider>,
	document.getElementById("root")
);

//w7cy
