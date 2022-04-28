import axios, { requests } from "../constants/axios";


export const register = async (email, password) => {
	try {
		const response = await axios.post(requests.register, {
			username: email,
			email: email,
			password: password
		});
		
		console.log("registerService response", response);
		return response;

	} catch (err) {
		console.log("registerService hatası",err);
		console.log(err.response.data.message[0].messages[0].message);
		return err.response;
	}
};