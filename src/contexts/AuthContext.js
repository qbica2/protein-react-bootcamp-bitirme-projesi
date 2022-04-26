/* eslint-disable react/prop-types */
import React, { createContext } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

	const values = {

	};

	return (
		<AuthContext.Provider value={values}>
			{children}
		</AuthContext.Provider>
	);
};

export default AuthContext;