import React from "react";
import { useNavigate } from "react-router-dom";
import style from "../styles/navigation.module.scss";
import Logo from "../constants/Logo";
import AddIcon from "../constants/icons/AddIcon";
import AvatarIcon from "../constants/icons/AvatarIcon";

function Navigation() {
	const navigate = useNavigate();
	return (
		<nav>
			<div className={style.navbar}>
				<div className={style.logo}>
					<Logo width= {129} height= {42}/>
				</div>
				<div className={style.links}>
					<a onClick={()=>navigate("/addproduct")}> <AddIcon width={13} height={13} color="#4B9CE2"/><span>Ürün Ekle</span></a>
					<a onClick={()=>navigate("/account")}> <AvatarIcon width={13} height={13} color="#4B9CE2"/> <span>Hesabım</span></a>
				</div>
			</div>
		</nav>
	);
}

export default Navigation;