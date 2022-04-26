import axios, { requests } from "../constants/axios";

export const register = async (email, password) => {
	try {
		const response = await axios.post(requests.register, {
			username: email,
			email: email,
			password: password
		});
		return response.data;

	}catch (err) {
		console.log("register hatası",err);
	}
};