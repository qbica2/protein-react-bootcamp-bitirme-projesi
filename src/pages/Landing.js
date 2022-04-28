import React from "react";
import { useNavigate } from "react-router-dom";

import style from "../styles/landing.module.scss";
import Logo from "../constants/Logo";
import AddIcon from "../constants/icons/AddIcon";
import AvatarIcon from "../constants/icons/AvatarIcon";
import Categories from "../components/Categories";



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
						<a> <AddIcon width={13} height={13} color="#4B9CE2"/><span>Ürün Ekle</span></a>
						<a> <AvatarIcon width={13} height={13} color="#4B9CE2"/> <span>Hesabım</span></a>
					</div>
				</div>
			</nav>
			<div className={style.container}>
				<div className={style.banner}></div>
				<Categories/>
			</div>
		</div>
	);
}

export default Landing;