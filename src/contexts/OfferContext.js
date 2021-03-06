/* eslint-disable react/prop-types */
import React, { createContext, useState } from "react";
import { submitOffer, deleteOffer, getOffers } from "../services/offerService";

const OfferContext = createContext();

export const OfferProvider = ({ children }) => {

	const [submittedOffers, setSubmittedOffers] = useState([]);

	const handleOffer = async (offer) => {
		const response = await submitOffer(offer);
		console.log("offer context response", response);
		if (response.status === 200) {
			setSubmittedOffers([...submittedOffers, response.data]);
		}

	};

	const cancelOffer = async (id) => {
		const response = await deleteOffer(id);
		if (response.status === 200) {
			const filteredOffers = submittedOffers.filter((offer) => offer.id !== id);
			setSubmittedOffers(filteredOffers);
			console.log("cancelOffer response", response);
			return true ;
		}
		return false;
	};

	const handleGetOffers = async (id) => {
		const response = await getOffers(id);
		if (response.status === 200) {
			setSubmittedOffers(response.data);
			console.log("here");
			console.log("handleGetOffers response", response);
			return true;
		}
		return false;
	};


	const values={
		handleOffer,
		submittedOffers,
		cancelOffer,
		handleGetOffers
	};

	return <OfferContext.Provider value={values}>{children}</OfferContext.Provider>;
};

export default OfferContext;