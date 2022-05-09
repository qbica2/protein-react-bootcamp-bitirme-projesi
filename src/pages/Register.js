import React, { useContext,useEffect } from "react";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import AuthContext from "../contexts/AuthContext";
import LoginRegisterLayout from "../components/LoginRegisterLayout";
import Validations from "../constants/validation";
import style from "../styles/loginRegisterLayout.module.scss";

function Register() {

	const { registerUser,registerLoading,auth } = useContext(AuthContext);
	const navigate = useNavigate();

	useEffect(() => {
		console.log("Register useEffect");
		if(auth.isAuthenticated) {
			navigate("/" );
		}
	},[]);

	const {handleSubmit,handleChange,handleBlur,values,errors,touched} = useFormik({
		initialValues: {
			email: "",
			password: ""
		},
		validationSchema: Validations,
		onSubmit: async () => {
			const isAuth = await registerUser(values.email, values.password);
			console.log(isAuth);
			if(isAuth) {
				navigate("/");
			}	
		}
	});

	useEffect(() => {
		if(touched.email && errors.email) {
			toast.error(errors.email);
		}
		if(touched.password && errors.password) {
			toast.error(errors.password);
		}
	},[errors,touched]);

	return (
		<LoginRegisterLayout>
			<div>
				<h1>Üye Ol</h1> 
				<p>Fırsatlardan yararlanmak için üye ol!</p>
			</div>
			<form>
				<label>Email</label>
				<input 
					className={touched.email && errors.email ? `${style.error}` : ""}
					name="email" 
					type="email" 
					placeholder="Email@example.com" 
					onChange={handleChange}
					value={values.email}
					onBlur={handleBlur}
				/>
				<label>Şifre</label>
				<input 
					className={touched.password && errors.password ? `${style.error}` : ""}
					name="password" 
					type="password" 
					onChange={handleChange}
					value={values.password}
					onBlur={handleBlur}
				/>
				<button type="submit" onClick={handleSubmit} disabled={registerLoading}>Üye Ol</button>
			</form>
			<span>Hesabın var mı ? <a onClick={()=>navigate("/login")}>Giriş Yap</a></span>
		</LoginRegisterLayout>
	);
}

export default Register;