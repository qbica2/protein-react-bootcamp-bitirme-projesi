import React from "react";
import "./App.css";
import Rooter from "./rooter/rooter";
import { AuthProvider } from "./contexts/AuthContext";
import { ProductsProvider } from "./contexts/ProductsContext";

function App() {
	return (
		<AuthProvider>
			<ProductsProvider>
				<Rooter />
			</ProductsProvider>
		</AuthProvider>
	);	
}

export default App;
