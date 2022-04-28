import axios, { requests } from "../constants/axios";


export const getAllCategories = async () => {
	try {
		const response = await axios.get(requests.categories);
		
		console.log("getAllCategories response", response);
		return response;

	} catch (err) {
		console.log("getAllCategories hatası",err);
		console.log(err.response.data.message[0].messages[0].message);
		return err.response;
	}
};