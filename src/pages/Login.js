import React from "react";
import LoginRegisterLayout from "../components/LoginRegisterLayout";

function Login() {
	return (
		<LoginRegisterLayout>
			<div>
				<h1>Giriş Yap</h1> 
				<p>Fırsatlardan yararlanmak için giriş yap!</p>
			</div>
			<form>
				<label>Email</label>
				<input type="email" placeholder="Email@example.com" />
				<label>Şifre</label>
				<input type="password" />
				<button>Giriş</button>
			</form>
			<span>Hesabın yok mu ? <a>Üye Ol</a></span>
		</LoginRegisterLayout>
	);
}

export default Login;