/* eslint-disable react/prop-types */
import React, { createContext,useState } from "react";
import { register } from "../services/authenticationService";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

	const [registerLoading, setRegisterLoading] = useState(false);
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
		console.log("jwt", response.jwt);
		document.cookie = ` Auth_Token=${response.jwt}; `;
		setAuth({
			isAuthenticated: true,
			user: response.user.email,
			id: response.user.id,
			password: response.user.password,
			token: response.jwt,
		});
		setRegisterLoading(false);
	};

	const values = {
		registerUser,
		registerLoading,
		auth,
	};

	return (
		<AuthContext.Provider value={values}>
			{children}
		</AuthContext.Provider>
	);
};

export default AuthContext;