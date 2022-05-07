import React, {useContext,useEffect} from "react";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import LoginRegisterLayout from "../components/LoginRegisterLayout";
import Validations from "../constants/validation";
import AuthContext from "../contexts/AuthContext";
import style from "../styles/loginRegisterLayout.module.scss";

function Login() {

	const { auth, loginUser, loginLoading } = useContext(AuthContext);
	const navigate = useNavigate();

	useEffect(() => {
		console.log("login useEffect");
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
			console.log(values);
			const isAuth = await loginUser(values.email, values.password);
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
				<h1>Giriş Yap</h1> 
				<p>Fırsatlardan yararlanmak için giriş yap!</p>
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
				<button type="submit" onClick={handleSubmit} disabled={loginLoading}>Giriş</button>
			</form>
			<span>Hesabın yok mu ? <a onClick={()=>navigate("/register")}>Üye Ol</a></span>
		</LoginRegisterLayout>
	);
}

export default Login;