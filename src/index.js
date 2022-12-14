import { MantineProvider } from "@mantine/core";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import App from "./App";
import store from "./redux/store";
import './styles.css'

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
	<StrictMode>
		<Provider store={store}>
			<BrowserRouter>
				<MantineProvider>
					<App />
				</MantineProvider>
			</BrowserRouter>
		</Provider>
	</StrictMode>
);
