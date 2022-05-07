import axios, { requests } from "../constants/axios";

export const submitOffer = async (offer) => {
	try {
		const response = await axios.post(requests.offers, offer, {
			headers: {
				Authorization: `Bearer ${document.cookie.split("=")[1]}`,
			}
		});
		console.log("giveOffer response", response);
		return response;

	} catch (err) {
		console.log("giveOffer hatası",err);
		return err.response;
	}
};

export const deleteOffer = async (id) =>{
	try {
		const response = await axios.delete(requests.offers + "/" + id, {
			headers: {
				Authorization: `Bearer ${document.cookie.split("=")[1]}`,
			}
		});
		console.log("deleteOffer response", response);
		return response;
	} catch (err) {
		console.log("deleteOffer hatası",err);
		return err.response;
	}
};

export const getOffers = async (id) => {
	try {
		const response = await axios.get(requests.offers + "?users_permissions_user=" + id, {
			headers: {
				Authorization: `Bearer ${document.cookie.split("=")[1]}`,
			}
		});
		console.log("getOffers response", response);
		return response;
	} catch (err) {
		console.log("getOffers hatası",err);
		return err.response;
	}
};
