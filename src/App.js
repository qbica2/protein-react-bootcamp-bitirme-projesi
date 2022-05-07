import React from "react";
import "./App.css";
import Rooter from "./rooter/rooter";
import { AuthProvider } from "./contexts/AuthContext";
import { ProductsProvider } from "./contexts/ProductsContext";
import { OfferProvider } from "./contexts/OfferContext";
import { BuyModalProvider } from "./contexts/BuyModalContext";

function App() {
	return (
		<AuthProvider>
			<BuyModalProvider>
				<ProductsProvider>
					<OfferProvider>
						<Rooter />
					</OfferProvider>
				</ProductsProvider>
			</BuyModalProvider>
		</AuthProvider>
	);	
}

export default App;
