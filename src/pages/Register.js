import React from "react";
import { useFormik } from "formik";
import { toast } from "react-toastify";

import LoginRegisterLayout from "../components/LoginRegisterLayout";
import Validations from "../constants/validation";


function Register() {

	// eslint-disable-next-line no-unused-vars
	const {handleSubmit,handleChange,handleBlur,values,errors,touched} = useFormik({
		initialValues: {
			email: "",
			password: ""
		},
		validationSchema: Validations,
		onSubmit: () => {
			console.log(values);
			toast.success("Kayıt işlemi başarılı");
		}
	});


	
	return (
		<LoginRegisterLayout>
			<div>
				<h1>Üye Ol</h1> 
				<p>Fırsatlardan yararlanmak için üye ol!</p>
			</div>
			<form>
				<label>Email</label>
				<input 
					name="email" 
					type="email" 
					placeholder="Email@example.com" 
					onChange={handleChange}
					value={values.email}
					onBlur={handleBlur}
				/>
				<label>Şifre</label>
				<input 
					name="password" 
					type="password" 
					onChange={handleChange}
					value={values.password}
					onBlur={handleBlur}
				/>
				<button type="submit" onClick={handleSubmit}>Üye Ol</button>
			</form>
			<span>Hesabın var mı ? <a>Giriş Yap</a></span>
		</LoginRegisterLayout>
	);
}

export default Register;