import React from "react";
import { useNavigate } from "react-router-dom";

import style from "../styles/landing.module.scss";
import Logo from "../constants/Logo";

function Landing() {
	// eslint-disable-next-line no-unused-vars
	const navigate = useNavigate();
	return (
		<div className={style.landing}>
			<nav>
				<div className={style.navbar}>
					<div className={style.logo}>
						<Logo width= {129} height= {42}/>
					</div>
					<div className={style.links}>
						<a>Ürün Ekle</a>
						<a>Hesabım</a>
					</div>
				</div>
			</nav>
			<div className={style.container}>
			</div>
		</div>
	);
}

export default Landing;