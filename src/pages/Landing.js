import React , { useContext } from "react";
import { useNavigate } from "react-router-dom";

import style from "../styles/landing.module.scss";
import Logo from "../constants/Logo";
import AddIcon from "../constants/icons/AddIcon";
import AvatarIcon from "../constants/icons/AvatarIcon";

import Categories from "../components/Categories";
import ProductList from "../components/ProductList";

import AuthContext from "../contexts/AuthContext";



function Landing() {

	const { auth } = useContext(AuthContext);
	const navigate = useNavigate();

	return (
		<div className={style.landing}>
			<nav>
				<div className={style.navbar}>
					<div className={style.logo}>
						<Logo width= {129} height= {42}/>
					</div>
					{
						auth.isAuthenticated ? 
							<div className={style.links}>
								<a> <AddIcon width={13} height={13} color="#4B9CE2"/><span>Ürün Ekle</span></a>
								<a> <AvatarIcon width={13} height={13} color="#4B9CE2"/> <span>Hesabım</span></a>
							</div>
							:
							<div className={style.links}>
								<a onClick={()=>navigate("/login")}> <AvatarIcon width={13} height={13} color="#4B9CE2"/> <span>Giriş Yap</span></a>
							</div>
					}
				</div>
			</nav>
			<div className={style.container}>
				<div className={style.banner}></div>
				<Categories/>
				<ProductList/>
			</div>
		</div>
	);
}

export default Landing;