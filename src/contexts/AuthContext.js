/* eslint-disable react/prop-types */
import React, { createContext,useState } from "react";
import { toast } from "react-toastify";
import { register, login } from "../services/authenticationService";



const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
	

	const [registerLoading, setRegisterLoading] = useState(false);
	const [loginLoading, setLoginLoading] = useState(false);
	const [auth, setAuth] = useState({
		isAuthenticated: false,
		user: null,
		id: null,
		password: null,
		token: null,
	});

	const registerUser = async (email, password) => {

		setRegisterLoading(true);
		const response = await register(email, password);
		console.log("registerUser response", response);

		if (response.status === 200) {

			toast.success("Kayıt işlemi başarılı");

			console.log("jwt", response.data.jwt);

			document.cookie = ` Auth_Token=${response.data.jwt}; `;

			setAuth({
				isAuthenticated: true,
				user: response.data.user.email,
				id: response.data.user.id,
				token: response.data.jwt,
			});
			setRegisterLoading(false);
			return true;

		} else if (response.status === 400){

			console.log("400 hatası");
			toast.error("Email  kullanılıyor");
			setRegisterLoading(false);
			return false;

		} else if (response.status === 500 ){

			console.log(response.statusText);
			toast.error(response.statusText);
			setRegisterLoading(false);
			return false;

		} else if (response.status === 403){

			console.log("401 hatası");
			toast.error(response.statusText);
			setRegisterLoading(false);
			return false;

		} else {
			setRegisterLoading(false);
			return false;
		}
	};

	const loginUser = async (email, password) => {
		
		setLoginLoading(true);
		const response = await login(email, password);
		console.log("loginUser response", response);

		if (response.status === 200) {

			toast.success("Giriş işlemi başarılı");

			console.log("jwt", response.data.jwt);

			document.cookie = ` Auth_Token=${response.data.jwt}; `;

			setAuth({
				isAuthenticated: true,
				user: response.data.user.email,
				id: response.data.user.id,
				token: response.data.jwt,
			});
			setLoginLoading(false);
			return true;

		} else if (response.status === 400){

			console.log("400 hatası");
			toast.error("Email ya da şifre hatalı");
			setLoginLoading(false);
			return false;

		} else if (response.status === 500 ){

			console.log(response.statusText);
			toast.error(response.statusText);
			setLoginLoading(false);
			return false;

		} else if (response.status === 403){

			console.log("401 hatası");
			toast.error(response.statusText);
			setLoginLoading(false);
			return false;

		} else {
			setLoginLoading(false);
			return false;
		}
	};

	const values = {
		registerUser,
		registerLoading,
		auth,
		setRegisterLoading,
		loginUser,
		loginLoading,
		
	};

	return (
		<AuthContext.Provider value={values}>
			{children}
		</AuthContext.Provider>
	);
};

export default AuthContext;