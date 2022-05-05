import React from "react";
import "./App.css";
import Rooter from "./rooter/rooter";
import { AuthProvider } from "./contexts/AuthContext";
import { ProductsProvider } from "./contexts/ProductsContext";
import { OfferProvider } from "./contexts/OfferContext";

function App() {
	return (
		<AuthProvider>
			<ProductsProvider>
				<OfferProvider>
					<Rooter />
				</OfferProvider>
			</ProductsProvider>
		</AuthProvider>
	);	
}

export default App;
