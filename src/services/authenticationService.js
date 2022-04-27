import axios, { requests } from "../constants/axios";
import { toast } from "react-toastify";

export const register = async (email, password) => {
	try {
		const response = await axios.post(requests.register, {
			username: email,
			email: email,
			password: password
		});
		if(response.status === 200) {
			console.log("200",response);
			toast.success("Kayıt işlemi başarılı");
			console.log("register response", response);
			console.log("registerservice response", response.data);
			return response.data;
		}

	}catch (err) {
		console.log("register hatası",err);
		console.log(err.response.data.message[0].messages[0].message);
		toast.error(err.response.data.message[0].messages[0].message);
	}
};