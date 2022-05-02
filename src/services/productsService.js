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

export const getAllProducts = async (page) => {
	try {
		const response = await axios.get(`${requests.products}&_start=${page*15} `);
		console.log("getAllProducts response", response);
		return response;

	} catch (err) {
		console.log("getAllProducts hatası",err);
		return err.response;
	}
};

export const getProductsByCategory = async (categoryId,page) => {

	try {
		const response = await axios.get(`${requests.products}&_start=${page*15}&category=${categoryId} ` );	
		console.log("getProductsByCategory response", response);
		return response;

	} catch (err) {
		console.log("getProductsByCategory hatası",err);
		return err.response;
	}

};

export const getProductsCount = async () => {
	try {
		const response = await axios.get(requests.count);
		console.log("getProductsCount response", response);
		return response;

	} catch (err) {
		console.log("getProductsCount hatası",err);
		return err.response;
	}
};