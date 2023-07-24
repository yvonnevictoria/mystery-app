import { createRoot } from "react-dom/client";
import { App } from "./App";
import { RelayEnvironmentProvider } from "react-relay";
import RelayEnvironment from './RelayEnvironment';

const container = document.getElementById("app");
const root = createRoot(container)

root.render(
	<RelayEnvironmentProvider environment={RelayEnvironment}>
		<App />
	</RelayEnvironmentProvider>
);
