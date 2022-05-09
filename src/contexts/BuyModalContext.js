/* eslint-disable react/prop-types */
import React, { createContext, useState} from "react";
import { toast } from "react-toastify";
import { buyProductById } from "../services/productsService";

const BuyModalContext = createContext();

export const BuyModalProvider = ({ children }) => {
	const [isBuyModalOpen, setIsBuyModalOpen] = useState(false);
	const [productId,setProductId] = useState(null);
	const [isBuy, setIsBuy] = useState(false);


	const handleBuySomething = async () => {
		const response = await buyProductById(productId);
		console.log("buyProductById response", response);
		if(response.status === 200){
			console.log("buyProductById response", response.data);
			console.log("satıldı");
			toast.success("Satın Alındı");
			setIsBuy(true);
			handleBuyModalClose();
			return true;
		}
		toast.error("Satın Alınamadı");
		setIsBuy(false);
		return false;
	};


	const handleBuyModalOpen = (id) => {
		setIsBuyModalOpen(true);
		setProductId(id);
	};

	const handleBuyModalClose = () => {
		setIsBuyModalOpen(false);
		setProductId(null);
	};

	const values = {
		isBuyModalOpen,
		handleBuyModalOpen,
		handleBuyModalClose,
		productId,
		setProductId,
		handleBuySomething,
		isBuy,
		setIsBuy
	};

	return <BuyModalContext.Provider value={values}>{children}</BuyModalContext.Provider>;
};

export default BuyModalContext;
