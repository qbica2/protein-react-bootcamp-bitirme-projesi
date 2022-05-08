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
		const response = await axios.get(`${requests.products}?_limit=15&_start=${page*15} `);
		console.log("getAllProducts response", response);
		return response;

	} catch (err) {
		console.log("getAllProducts hatası",err);
		return err.response;
	}
};

export const getProductsByCategory = async (categoryId,page) => {

	try {
		const response = await axios.get(`${requests.products}?_limit=15&_start=${page*15}&category=${categoryId} ` );	
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

export const getProductById = async (id) => {
	try {
		const response = await axios.get(`${requests.products}/${id}`);
		console.log("getProductById response", response);
		return response;

	} catch (err) {
		console.log("getProductById hatası",err);
		return err.response;
	}
};

export const buyProductById = (id)	=> {
	try	{
		const response = axios.put(`${requests.products}/${id}`,{
			isSold: true,
		},
		{
			headers: {
				Authorization: `Bearer ${document.cookie.split("=")[1]}`,
			}
		});
		console.log("buyProductById response", response);
		return response;
	} catch (err) {
		console.log("buyProductById hatası",err);
		return err.response;
	}
};

export const getMyProducts = async (id) => {
	try {
		const response = await axios.get(`${requests.products}?users_permissions_user=${id}`, {
			headers: {
				Authorization: `Bearer ${document.cookie.split("=")[1]}`,
			}
		});
		console.log("getMyProducts response", response);
		return response;
	} catch (err) {
		console.log("getMyProducts hatası",err);
		return err.response;
	}
};

export const getAllBrands = async () => {
	try {
		const response = await axios.get(requests.brands);
		console.log("getAllBrands response", response);
		return response;
	} catch (err) {
		console.log("getAllBrands hatası",err);
		return err.response;
	}
};

export const getAllColors = async () => {
	try {
		const response = await axios.get(requests.color);
		console.log("getAllColors response", response);
		return response;
	} catch (err) {
		console.log("getAllColors hatası",err);
		return err.response;
	} 
};

export const getAllUsingStatus = async () => {
	try {
		const response = await axios.get(requests.status);
		console.log("getAllUsingStatus response", response);
		return response;
	} catch (err) {
		console.log("getAllUsingStatus hatası",err);
		return err.response;
	}
};

export const uploadProduct = async (formData) => {
	
	console.log("formData", formData);

	try {
		const response = await axios.post(requests.products, formData,{

			headers: {
				Authorization: `Bearer ${document.cookie.split("=")[1]}`,
			},
		
		});
		console.log("uploadProduct response", response);
		return response;
	} catch (err) {
		console.log("uploadProduct hatası",err);
		return err.response;
	}

};