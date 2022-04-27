import React from "react";
import "./App.css";
import Rooter from "./rooter/rooter";
import { AuthProvider } from "./contexts/AuthContext";

function App() {
	return (
		<AuthProvider>
			<Rooter />
		</AuthProvider>
	);	
}

export default App;
