import React from "react";
import LoginRegisterLayout from "../components/LoginRegisterLayout";

function Register() {
	return (
		<LoginRegisterLayout>
			<div>
				<h1>Üye Ol</h1> 
				<p>Fırsatlardan yararlanmak için üye ol!</p>
			</div>
			<form>
				<label>Email</label>
				<input type="email" placeholder="Email@example.com" />
				<label>Şifre</label>
				<input type="password" />
				<button>Üye Ol</button>
			</form>
			<span>Hesabın var mı ? <a>Giriş Yap</a></span>
		</LoginRegisterLayout>
	);
}

export default Register;